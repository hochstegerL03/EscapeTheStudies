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
          </footer>
        </div>
      </et-s-banner>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bannernewscontainer {
  width: 90%;
  height: 35vh;
}
.bannernews {
  border-radius: 5vw;
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
  border-radius: 0vw 5vw 5vw 5vw;
  z-index: 1;
  position: relative;
}

.darkbar {
  background-color: $primary;
  width: 100%;
  height: 4vh;
  border-radius: 0vw 5vw 5vw 5vw;
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

.bar-wrapper {
  position: relative;
}
</style>
<script setup>
import EtSBanner from '../components/EtSBanner.vue';
</script>
