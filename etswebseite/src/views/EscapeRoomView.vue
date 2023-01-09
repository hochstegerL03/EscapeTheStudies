<template>
  <div>
    <!--Content-->
    <div class="flex justify-center w-100 q-mt-lg">
      <div class="w-100">
        <!--Escape Room Visual Top-->
        <div class="flex justify-center items-center q-mb-xl">
          <!--Main Window-->
          <div id="news" class="ets-escape-room-container q-py-md">
            <div class="row ets-escape-room-ui-container placeholder">
              <div class="col-2">
                <div class="flex h-100 justify-center items-center">
                  <img
                    @click="changeRoom('left')"
                    class="w-70 capped"
                    src="escaperoom/PointerLeft.svg"
                  />
                </div>
              </div>
              <div class="col-8">
                <!--Escape Room Content-->
                <main class="w-100 h-100">
                  <div class="w-100 h-100">
                    <div
                      v-for="(slide, index) in slides.filter((ch) => ch.slide == pointer)"
                      :key="index"
                      :style="`position: absolute; left: ${slide.pl}; top: ${slide.pt};`"
                    >
                      <img
                        @click="challenge(slide.challenge)"
                        :src="slide.icon"
                        :style="`width: ${slide.scaling};   `"
                      />
                    </div>
                  </div>
                </main>
                <!--Escape Room Content End-->
              </div>
              <div class="col-2">
                <div class="flex h-100 justify-center items-center">
                  <img
                    @click="changeRoom('right')"
                    class="w-70 capped"
                    src="escaperoom/PointerRight.svg"
                  />
                </div>
              </div>

              <!--Escape Room Navigation-->
              <footer class="absolute-bottom">
                <div class="row justify-center items-center">
                  <div class="col-4"></div>
                  <div class="col-4">
                    <div class="flex justify-center">
                      <div class="lightbar">
                        <div class="flex items-center justify-center">
                          <div
                            class="q-gutter-x-lg text-white text-center subheader text-weight-bold text-body1"
                          >
                            <span
                              v-for="(page, index) in pages"
                              :key="index"
                              :id="index"
                              @click="changeRoomMenu(index)"
                              >{{ index + 1 }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4"></div>
                </div>
              </footer>
              <!--Escape Room Navigation End-->
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
.capped {
  max-width: 5rem !important;
}
.ets-menu-highlight {
  color: $primary;
}

.ets-escape-room-container {
  width: 100%;
  height: 50vh;
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
.ets-escape-room-ui-container {
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
  border-radius: 15px;
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
</style>
<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
  for (let index = 0; index < pages; index++) {
    selectors.value.push(document.getElementById(index));
  }
});
const selectors = ref([]);
const pages = 3;
const pointer = ref(1);
const slides = [
  {
    pl: '20%',
    pt: '10%',
    challenge: 'challenge1',
    icon: 'escaperoom/phChallenge.svg',
    scaling: '10vw',
    slide: 1,
  },
  {
    pl: '35%',
    pt: '18%',
    challenge: 'challenge2',
    icon: 'escaperoom/phChallenge.svg',
    scaling: '15vw',
    slide: 1,
  },
  {
    pl: '20%',
    pt: '10%',
    challenge: 'challenge1',
    icon: 'escaperoom/phChallenge.svg',
    scaling: '10vw',
    slide: 3,
  },
  {
    pl: '35%',
    pt: '18%',
    challenge: 'challenge2',
    icon: 'escaperoom/phChallenge.svg',
    scaling: '15vw',
    slide: 2,
  },
];
function challenge(obj) {
  alert(obj);
}
function changeRoom(direction) {
  if (direction == 'left' && pointer.value > 1) pointer.value--;
  else if (direction == 'left' && pointer.value < 2) pointer.value = pages;
  else if (direction == 'right' && pointer.value < pages) pointer.value++;
  else pointer.value = 1;
  for (let index = 0; index < pages; index++) {
    selectors.value[index].classList.remove('ets-menu-highlight');
  }
  selectors.value[pointer.value - 1].classList.add('ets-menu-highlight');
}
function changeRoomMenu(index) {
  pointer.value = index + 1;
  for (let index = 0; index < pages; index++) {
    selectors.value[index].classList.remove('ets-menu-highlight');
  }
  selectors.value[pointer.value - 1].classList.add('ets-menu-highlight');
}
</script>
