<template>
  <div>
    <!--Header-->
    <div>
      <!--Default Banner. Can be modified -->
      <q-img class="q-mb-md ets-banner" src="images/courses_banner.png"></q-img>
      <!--Banner End-->
      <!--Infos-->
      <EtSHeader
        v-if="user"
        :titel="`Welcome, ${user[0].username}`"
        content="Discover the asthetic hub of EtS and start your studies ASAP."
      ></EtSHeader>
      <!--Infos Ende-->
      <!--OnePage Menu-->
      <OnPageMenu></OnPageMenu>
      <!--OnePage Menu End-->
    </div>
    <!--Header End-->
    <!--Content-->
    <div class="flex justify-center ets-w-100 q-mt-lg">
      <div class="ets-w-90">
        <!--Lection 1-->
        <div class="flex justify-center q-mb-xl">
          <!--Header Lection 1-->
          <div class="ets-w-100 q-py-md">
            <div class="row justify-center items-center ets-card-lection ets-h-100">
              <div class="col-8 bg-accent ets-card-lection-start" v-if="course[0]">
                <div class="ets-header text-h5 text-weight-bold q-ma-md">
                  {{ course[0].title }}
                </div>
                <div class="text text-h6 q-ma-md text-weight-light">
                  {{ course[0].description }}
                </div>
              </div>
              <router-link class="col-4 bg-secondary ets-card-lection-end" to="/cooverview">
              </router-link>
            </div>
          </div>
          <!--Header Lection 1 End-->
          <!--Lection 1 Chapter Cards-->
          <div class="ets-w-100 q-pt-md" v-for="chap in chapter.slice(0, 3)" :key="chap.chapterid">
            <div class="row justify-center items-center ets-card-lection ets-h-100">
              <div class="col-8 bg-accent ets-card-lection-start">
                <div
                  v-if="chap.chapterid !== 3"
                  class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md ets-overflow-scroll"
                >
                  {{ chap.title }}
                </div>
                <div
                  v-else
                  class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md ets-overflow-scroll disabled"
                >
                  {{ chap.title }}
                </div>
              </div>
              <div class="col-4 bg-secondary ets-card-lection-end">
                <div class="flex justify-center items-center ets-font-icon" v-if="userChapStatus">
                  <i v-if="userChapStatus.lenght > 0" class="fa-regular fa-square-check"></i>
                </div>
              </div>
            </div>
          </div>
          <!--Lection 1 Chapter Cards End-->
          <!--Lection 1 Link-->
          <router-link class="q-mt-md text-body1 ets-text text-weight-medium" to="/cooverview">
            <a>See more</a>
          </router-link>

          <!--Lection 1 Link End-->
        </div>
        <!--Lection 1 End-->
        <!--Lection 2-->
        <div class="flex justify-center q-mb-xl disabled">
          <!--Header Lection 2-->
          <div class="ets-w-100 q-py-md">
            <div class="row justify-center items-center ets-card-lection ets-h-100">
              <div class="col-8 bg-accent ets-card-lection-start">
                <div class="ets-header text-h5 text-weight-bold text-italic q-ma-md">
                  Your Project:
                </div>
                <div class="text text-h6 q-ma-md text-weight-regular">
                  Want to be Part of EtS? <a>Join now!</a>
                </div>
              </div>
              <div class="col-4 bg-secondary ets-card-lection-end"></div>
            </div>
          </div>
          <!--Header Lection 2 End-->
          <!--Lection 2 Chapter Cards-->
          <div class="ets-w-100 q-pt-md">
            <div class="row justify-center items-center ets-card-lection ets-h-100">
              <div class="col-8 bg-accent ets-card-lection-start">
                <div
                  class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md ets-overflow-scroll"
                >
                  Step 1: Login
                </div>
              </div>
              <div class="col-4 bg-secondary ets-card-lection-end">
                <div class="flex justify-center items-center ets-font-icon">
                  <i class="fa-regular fa-square-check"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="ets-w-100 q-pt-md">
            <div class="row justify-center items-center ets-card-lection ets-h-100">
              <div class="col-8 bg-accent ets-card-lection-start">
                <div
                  class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md ets-overflow-scroll"
                >
                  Step 2: Contact us
                </div>
              </div>
              <div class="col-4 bg-secondary ets-card-lection-end"></div>
            </div>
          </div>
          <div class="ets-w-100 q-pt-md disabled">
            <div class="row justify-center items-center ets-card-lection ets-h-100">
              <div class="col-8 bg-accent ets-card-lection-start">
                <div
                  class="ets-header text-h6 text-weight-bold q-my-sm q-mx-md ets-overflow-scroll"
                >
                  Step 3: Celebrate
                </div>
              </div>
              <div class="col-4 bg-secondary ets-card-lection-end"></div>
            </div>
          </div>
          <!--Lection 2 Chapter Cards End-->
          <!--Lection 1 Link-->
          <a class="q-mt-md text-body1 text text-weight-medium">See more</a>
          <!--Lection 1 Link End-->
        </div>
        <!--Lection 2 End-->
        <!--Construction-->
        <div class="text-center ets-header text-h4 text-italic q-mb-xl">To be continued...</div>

        <!--Construction End-->
      </div>
    </div>
    <!--Content End-->
  </div>
</template>

<style lang="scss" scoped></style>
<script setup>
import EtSHeader from '../components/EtSHeader.vue';
import OnPageMenu from '../components/OnPageMenu.vue';
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/user.js';
import { useCourseStore } from '../stores/course.js';
import axios from 'axios';

const userStore = useUserStore();
const courseStore = useCourseStore();
let user = ref();
let chapter = ref([]);
let course = ref([]);
let userChapStatus = ref();

onMounted(async () => {
  user.value = userStore.user;
  await courseStore.getCourse();
  await courseStore.getChapters();
  course.value = courseStore.course;
  chapter.value = courseStore.chapters;
  const userid = user.value[0].userid;
  const { data } = await axios.get(`http://localhost:3000/escapethestudies/userChapter/${userid}`);
  userChapStatus.value = data;
});
</script>
