<template>
  <div>
    <div>
      <div class="header q-mt-md">
        <div class="headeroverlay h-100">
          <div class="flex justify-center items-center h-100">
            <div class="shadowbox">
              <div class="text-white text-h4 text-weight-bolder">Just an Act</div>
            </div>
            <div class="text-white absolute-bottom-right q-ma-md">
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
        <img class="headerimg" src="images/just_an_act_placeholder.jpg" />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <!--Scroll Tag Bar-->
      <div class="w-100">
        <div class="scrollbar">
          <div class="row no-wrap inline items-center q-my-sm">
            <div class="tagbox q-mx-sm">
              <div class="flex items-center justify-center h-100 text-h6 text-center text">
                HTML
              </div>
            </div>
            <div class="tagbox q-mx-sm">
              <div class="flex items-center justify-center h-100 text-h6 text-center text">
                JavaScript
              </div>
            </div>
            <div class="tagbox q-mx-sm">
              <div class="flex items-center justify-center h-100 text-h6 text-center text">Vue</div>
            </div>
            <div class="tagbox q-mx-sm">
              <div class="flex items-center justify-center h-100 text-h6 text-center text">
                Bootstrap
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Scroll Tag Bar End-->
      <!--Body-->
      <div class="w-90 q-mt-md">
        <div class="row justify-center items-center q-mb-md">
          <!--Header-->
          <div class="col-12 text-center subheader text-h5 text-weight-bolder">Just an Act:</div>
          <!--Header End-->
          <!--Description-->
          <div class="w-90">
            <div class="col-12 text text-h6 q-my-md text-weight-regular">
              Welcome to a World full of Magic, Drama and Webtechnology. In this little Beginner
              friendly Course we will teach you how to use basic Bootstrap, HTML, JavaScript and
              Vue. So be our Guest and <a class="disabled">join</a> this weird acting fanatic world.
            </div>
          </div>
          <!--Description End-->
        </div>
        <hr />
        <!--Chapter Cards-->
        <div class="flex justify-center q-mb-xl">
          <!--Chapters-->
          <div class="w-100 q-pt-md">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="subheader text-h6 text-weight-bold q-my-sm q-mx-md">
                  Chapter 1: Spectator
                </div>
              </div>
              <router-link to="/chapter" class="col-4 cardbg-medium cardlection-end">
                <div class="flex justify-center items-center checkmark">
                  <i class="fa-regular fa-square-check"></i>
                </div>
              </router-link>
            </div>
          </div>
          <div class="w-100 q-pt-md">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="subheader text-h6 text-weight-bold q-my-sm q-mx-md">
                  Chapter 2: The Act
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <div class="w-100 q-pt-md disabled">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="subheader text-h6 text-weight-bold q-my-sm q-mx-md cappeddesc">
                  Chapter 3: Another Promise
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <div class="w-100 q-pt-md disabled">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="subheader text-h6 text-weight-bold q-my-sm q-mx-md cappeddesc">
                  Chapter 4: Over the Watch
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <div class="w-100 q-pt-md disabled">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="subheader text-h6 text-weight-bold q-my-sm q-mx-md cappeddesc">
                  Chapter 5: Another Sky
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <div class="w-100 q-pt-md disabled">
            <div class="row justify-center items-center cardlection h-100">
              <div class="col-8 cardbg-light cardlection-start">
                <div class="subheader text-h6 text-weight-bold q-my-sm q-mx-md cappeddesc">
                  Chapter 6: Closed Doors
                </div>
              </div>
              <div class="col-4 cardbg-medium cardlection-end"></div>
            </div>
          </div>
          <!--Chapters End-->
        </div>
        <!--Chapter Cards Ende-->
      </div>
      <!--Body End-->
      <!--Buttons-->
      <div class="funnybtn w-100 row justify-center items-center q-mt-xl">
        <router-link to="/courses" class="col-6 text-white">
          <div class="text-center subheader text-h6 text-weight-bold">Give Up</div>
          <div class="text-center subheader text-body2 text-italic">or go Home</div>
        </router-link>
      </div>
      <!--Buttons End-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  position: relative;
}
.headeroverlay {
  width: 100%;
  height: 100%;
  position: absolute;
}

.headerimg {
  height: 33vh;
  width: 100%;
}

.shadowbox {
  text-shadow: 5px 5px 5px black;
}

.scrollbar {
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar::-webkit-scrollbar {
  display: none;
}

.tagbox {
  background-color: $secondary;
  width: 40vw;
  min-height: 20px;
  height: 5vh;
  max-height: 50px;
  border-radius: 20px;
  color: white;
}

.funnybtn {
  background-color: $secondary;
  color: white;
  height: 8vh;
  border-radius: 20px 20px 0px 0px;
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
//Scroll Tags:

//.scrollbar Object
const scrollbarTags = ref();

//isMouseDown
const mouseDownTrigger = ref(false);

//X-Position of scrollbarTags
const referenceX = ref();

//scroll-Distance
const relativeScroll = ref();

onMounted(() => {
  //get .scrollbar Object
  scrollbarTags.value = document.querySelector('.scrollbar');

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
