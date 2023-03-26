<template>
  <div>
    <!--Header-->
    <div>
      <div class="ets-preview q-mt-md">
        <div class="ets-preview-overlay ets-h-100">
          <div class="flex justify-center items-center ets-h-100">
            <div class="ets-text-shadow">
              <div class="ets-header text-white text-h4 text-weight-bolder" v-if="course">
                {{ course[0].title }}
              </div>
            </div>
            <div class="text-white absolute-bottom-right q-ma-md">
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
        <img class="ets-banner ets-w-100" src="images/just_an_act_placeholder.jpg" />
      </div>
    </div>
    <!--Header End-->
    <!--Content-->
    <div class="flex justify-center items-center">
      <!--Scroll Tag Bar-->
      <div class="ets-w-100">
        <div class="ets-scrollbar">
          <div class="row no-wrap inline items-center q-my-sm" v-if="tags">
            <div class="ets-tag q-mx-sm" v-for="(t, index) in tags" :key="index">
              <div class="flex items-center justify-center ets-h-100 text-h6 text-center text">
                {{ t }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Scroll Tag Bar End-->
      <!--Body-->
      <div class="ets-w-90 q-mt-md">
        <div class="row justify-center items-center q-mb-md">
          <!--Header-->
          <div class="col-12 text-center ets-header text-h5 text-weight-bolder" v-if="course">
            {{ course[0].title }}:
          </div>
          <!--Header End-->
          <!--Description-->
          <div class="ets-w-90">
            <div class="col-12 text text-h6 q-my-md text-weight-regular" v-if="course">
              <!-- Welcome to a World full of Magic, Drama and Webtechnology. In this little Beginner
              friendly Course we will teach you how to use basic Bootstrap, HTML, JavaScript and
              Vue. So be our Guest and <a class="disabled">join</a> this weird acting fanatic world. -->
              {{ course[0].detailedinformation }}
            </div>
          </div>
          <!--Description End-->
        </div>
        <hr />
        <!--Chapter Cards-->
        <div class="flex justify-center q-mb-xl">
          <!--Chapters-->
          <div class="ets-w-100 q-pt-md" v-for="chap in chapter" :key="chap.chapterid">
            <div class="row justify-center items-center ets-card-lection ets-h-100">
              <div class="col-8 bg-accent ets-card-lection-start">
                <div
                  class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md ets-overflow-scroll"
                >
                  {{ chap.title }}
                </div>
              </div>
              <router-link
                v-if="chap.title !== 'Chapter 5: ER'"
                :to="`/chapter${chap.chapterid}`"
                class="col-4 bg-secondary ets-card-lection-end"
              >
                <div class="flex justify-center items-center ets-font-icon" v-if="userChapStatus">
                  <i v-if="userChapStatus.lenght > 0" class="fa-regular fa-square-check"></i>
                </div>
              </router-link>
              <router-link v-else to="/escaperoom" class="col-4 bg-secondary ets-card-lection-end">
                <div class="flex justify-center items-center ets-font-icon" v-if="userChapStatus">
                  <i v-if="userChapStatus.lenght > 0" class="fa-regular fa-square-check"></i>
                </div>
              </router-link>
            </div>
          </div>
          <!--Chapters End-->
        </div>
        <!--Chapter Cards Ende-->
      </div>
      <!--Body End-->
      <!--Buttons-->
      <div class="ets-button-menu ets-w-100 row justify-center items-center q-mt-xl">
        <router-link to="/courses" class="col-6 text-white">
          <div class="text-center ets-header text-h6 text-weight-bold">Give Up</div>
          <div class="text-center ets-header text-body2 text-italic">or go Home</div>
        </router-link>
      </div>
      <!--Buttons End-->
    </div>
    <!--Content End-->
  </div>
</template>
<style lang="scss" scoped>
.ets-preview {
  width: 100%;
  height: 100%;
  position: relative;
}
.ets-preview-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
}

.ets-scrollbar {
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: grab;
}

.ets-scrollbar::-webkit-scrollbar {
  display: none;
}

.ets-tag {
  background-color: $secondary;
  width: 40vw;
  min-height: 20px;
  height: 5vh;
  max-height: 50px;
  border-radius: 20px;
  color: white;
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
import { useCourseStore } from '../stores/course.js';
import { useUserStore } from '../stores/user.js';
import axios from 'axios';

const courseStore = useCourseStore();
let chapter = ref([]);
const userStore = useUserStore();
let user = ref();
let userChapStatus = ref();
let course = ref();
let tags = ref([]);
//Scroll Tags:

//.scrollbar Object
const scrollbarTags = ref();

//isMouseDown
const mouseDownTrigger = ref(false);

//X-Position of scrollbarTags
const referenceX = ref();

//scroll-Distance
const relativeScroll = ref();

onMounted(async () => {
  //get .scrollbar Object
  scrollbarTags.value = document.querySelector('.ets-scrollbar');

  //onMouseMove
  scrollbarTags.value.addEventListener('mousemove', (e) => {
    //Prevent Default Event (for example: Selecting Text)
    e.preventDefault();
    //only fire if above scrollbar and left mouse button clicked
    if (!mouseDownTrigger.value) {
      return;
    }
    //where the mouse pointer is at the moment (e.pageX) relative to the object (parent's container) offset (left) in pixel
    const x = e.pageX - scrollbarTags.value.offsetLeft;
    //x current mouse position; referenceX = mouse position at start of drag
    const scroll = x - referenceX.value;
    //Scroll Command
    scrollbarTags.value.scrollLeft = relativeScroll.value - scroll;
  });

  //Event Listeners
  scrollbarTags.value.addEventListener('mousedown', startScrollbarHorizontal);
  scrollbarTags.value.addEventListener('mouseup', stopScrollbarHorizontal);
  scrollbarTags.value.addEventListener('mouseleave', stopScrollbarHorizontal);

  await courseStore.getChapters();
  chapter.value = courseStore.chapters;
  user.value = userStore.user;
  const userid = user.value[0].userid;
  const { data } = await axios.get(`http://localhost:3000/escapethestudies/userChapter/${userid}`);
  userChapStatus.value = data;
  await courseStore.getCourse();
  course.value = courseStore.course;
  const sTag = await axios.get('http://localhost:3000/escapethestudies/tag');
  for (let index = 0; index < sTag.data.length; index++) {
    if (sTag.data[index].course.title == course.value[0].title) {
      tags.value.push(sTag.data[index].tag.name);
    }
  }
});

function startScrollbarHorizontal(e) {
  mouseDownTrigger.value = true;
  referenceX.value = e.pageX - scrollbarTags.value.offsetLeft;
  relativeScroll.value = scrollbarTags.value.scrollLeft;
}
function stopScrollbarHorizontal(e) {
  mouseDownTrigger.value = false;
}
</script>
