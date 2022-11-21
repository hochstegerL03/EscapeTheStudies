<template>
  <div>
    <!--Content-->
    <div class="flex justify-center w-100 q-mt-lg">
      <div class="w-90">
        <!--Escape Room Visual Top-->
        <div class="flex justify-center items-center q-mb-xl">
          <!--Placeholder Lection Banner-->
          <div id="news" class="bannernewscontainer q-py-md">
            <div class="bannernewsoverlay bannernews placeholder">
              <div class="flex items-start justify-center">
                <header class="fitbanner">
                  <p class="q-pa-md text text-h5">
                    Just an Act: Learn the Magic of Web-Development!
                  </p>
                </header>
              </div>
              <main></main>
              <footer class="absolute-bottom">
                <div class="row">
                  <div class="col-9">
                    <div class="bar-wrapper">
                      <div class="lightbar">
                        <div class="flex items-center justify-center h-100">
                          <div
                            class="text-white text-center q-pb-xs subheader text-weight-bold text-h6"
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
                  <div class="col-3">
                    <span
                      class="text-primary float-right fitbanner text-center subheader text-weight-bolder text-h5"
                      >New!</span
                    >
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <!--Placeholder Lection Banner End-->
        </div>
        <!--Escape Room Visual Top End-->
      </div>
    </div>
  </div>
  <!--Content End-->
</template>

<style lang="scss" scoped>
.bannernewscontainer {
  width: 100%;
  height: 35vh;
}

.bannernewscontainer-flex {
  width: 100%;
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
  height: 100%;
  max-height: 6vh;
  border-radius: 0vw 15px 15px 15px;
  z-index: 1;
  position: relative;
}

.darkbar {
  background-color: $primary;
  width: 100%;
  height: 100%;
  max-height: 6vh;
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
  height: 100%;
}
</style>
<script setup></script>
