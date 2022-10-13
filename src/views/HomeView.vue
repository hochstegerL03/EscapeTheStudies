<template>
  <div class="flex justify-center items-center q-mb-xl">
    <!--Placeholder Lection Banner-->
    <div id="news" class="bannernewscontainer q-py-md">
      <et-s-banner class="">
        <div class="bannernewsoverlay bannernews placeholder">
          <div class="flex items-start justify-center">
            <header class="fitbanner">
              <p class="q-pa-md header text-italic text-h5">
                Just an Act: Learn the Magic of Web-Development!
              </p>
            </header>
          </div>
          <main></main>
          <footer class="absolute-bottom barabsolute">
            <div class="row">
              <div class="col-8">
                <div class="bar-wrapper">
                  <div class="lightbar">
                    <div class="flex items-center justify-center h-100">
                      <div
                        class="text-white text-center q-pb-xs subheader text-weight-bold text-italic text-h6"
                      >
                        HTML, JavaScript
                      </div>
                    </div>
                  </div>
                  <div class="darkbar">
                    <div class="flex items-center justify-end h-100">
                      <div class="darkbarcontent">
                        <span
                          class="text-white text-left subheader text-weight-bold text-italic text-h5"
                          >...</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <span
                  class="text-primary float-right fitbanner text-center subheader text-weight-bolder text-h5"
                  >New!</span
                >
              </div>
            </div>
          </footer>
        </div>
      </et-s-banner>
    </div>
    <!--Placeholder Lection Banner End-->

    <!--Placeholder Lection Info Banner-->
    <div id="newsdetails" class="bannernewscontainer-flex q-py-md">
      <et-s-banner class="">
        <div
          class="bannernewsoverlay bannernewsdetails { border-radius: 0vw 0vw 5vw 5vw; } placeholder"
        >
          <header>
            <div class="header-30">
              <div class="row items-start justify-center h-100">
                <div class="infobar col-3">
                  <div
                    class="text-white text-center q-pb-xs subheader text-weight-bold text-italic text-h6"
                  >
                    Info
                  </div>
                </div>

                <div class="col-6 self-end">
                  <div class="header text-center self-end text-italic text-h5">Just an Act:</div>
                </div>
                <div class="col-3"></div>
              </div>
            </div>
          </header>
          <main class="q-pb-lg">
            <div class="text-h6 text-weight-light q-pa-md text-italic">
              Learn more about the Beauty behind programming. Discover a breathtaking world ruled by
              a fool scheme ...
            </div>
          </main>
        </div>
      </et-s-banner>
    </div>
    <!--Placeholder Lection Info Banner End-->
  </div>
  <!--Home Navbar-->
  <div class="flex justify-center items-center q-mb-xl">
    <div id="homenav" class="chat-bubble">
      <et-s-chat-nav
        @click="scrolltovertically('whatisets')"
        colortype="dark"
        direction="right"
        class="q-pa-md q-mb-lg"
        ><span>What is EtS?</span></et-s-chat-nav
      >
      <et-s-chat-nav @click="scrolltovertically('yourlittlejourney')" class="q-pa-md q-my-lg"
        ><span>Your little journey begins here.</span></et-s-chat-nav
      >
      <et-s-chat-nav @click="scrolltovertically('continue')" class="q-pa-md q-mt-lg"
        ><span>How will we continue?</span></et-s-chat-nav
      >
    </div>
  </div>
  <!--Home Navbar Ende-->
  <hr />
  <!--What is EtS Section-->
  <div class="flex justify-center items-center q-my-xl">
    <div id="whatisets" class="chat-bubble">
      <et-s-chat-nav colortype="dark" direction="right" class="q-pa-md q-mb-lg"
        ><span>What is EtS?</span></et-s-chat-nav
      >
    </div>
    
  </div>
  <!--What is EtS Section End-->
</template>

<style lang="scss" scoped>
.bannernewscontainer {
  width: 90%;
  height: 35vh;
}

.chat-bubble {
  width: 90%;
}

.bannernewscontainer-flex {
  width: 90%;
}
.bannernews {
  border-radius: 15px;
}
.bannernewsdetails {
  border-radius: 0px 0px 15px 15px;
}
.bannernewsoverlay {
  width: 100%;
  height: 100%;
  position: relative;
}
.placeholder {
  background-color: $accent;
}

.lightbar {
  background-color: $secondary;
  width: 80%;
  height: 4vh;
  border-radius: 0vw 15px 15px 15px;
  z-index: 1;
  position: relative;
}

.infobar {
  background-color: $secondary;
  width: 100%;
  height: 4vh;
  border-radius: 0vw 15px 15px 0vw;
}

.darkbar {
  background-color: $primary;
  width: 100%;
  height: 4vh;
  border-radius: 0vw 15px 15px 15px;
  z-index: 0;
  bottom: 0;
  position: absolute;
}
.darkbarcontent {
  width: 15%;
  float: right;
}

.fitbanner {
  width: 96%;
}

.h-100 {
  height: 100%;
}

.header-30 {
  height: 6.5vh;
}

.bar-wrapper {
  position: relative;
}
</style>
<script setup>
import EtSBanner from '../components/EtSBanner.vue';
import EtSChatNav from '../components/EtSChatNav.vue';
import { scroll } from 'quasar';
const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrolltovertically(obj) {
  const el = document.getElementById(obj);
  const target = getScrollTarget();
  const offset = el.offsetTop;
  const duration = 1000;
  setVerticalScrollPosition(target, offset, duration);
}
</script>
