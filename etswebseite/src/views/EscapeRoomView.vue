<template>
  <div>
    <!--Content-->
    <div class="flex justify-center w-100 q-mt-lg">
      <div class="w-100">
        <!--Escape Room Visual Top-->
        <div class="flex justify-center items-center q-mb-sm">
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
        <!--Info- / Progress-Bar-->
        <div class="">
          <div class="row justify-center items-center">
            <div class="col-12">
              <div class="flex justify-center">
                <div class="progressbar q-py-xs">
                  <div class="flex items-center justify-center">
                    <div class="q-gutter-x-md text-white titelold text-weight-regular text-h5">
                      <span v-for="(slide, index) in slides" :key="index" :id="index">
                        <span v-if="slide.isDone">c{{ index + 1 }}</span>
                        <span v-else class="disabled">c{{ index + 1 }}</span>
                      </span>
                    </div>
                    <div
                      class="q-ml-lg q-gutter-x-sm text-right text-white titelold text-weight-regular text-h6"
                    >
                      <span v-for="(slide, index) in slides" :key="index" :id="index">
                        <i v-if="slide.isDone" class="fa-solid fa-circle"></i>
                        <i v-else class="fa-regular fa-circle"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <!--Info- / Progress-Bar End-->
        <!--Challenge-->
        <div class="flex justify-center">
          <div class="w-90">
            <!--Caption-->
            <div class="q-mt-lg">
              <div class="text-h5 text-bold subheader">Challenge 1:</div>
            </div>
            <!--Caption End-->
            <!--Body-->
            <div>
              <!--Preview-->
              <div>
                <div class="placeholderPreview q-mt-md">
                  <!--Note: durch Image ersetzen-->
                </div>
              </div>
              <!--Preview End-->
              <!--Explanation-->
              <div>
                <div class="text text-h6 text-weight-regular q-my-md">
                  Hier kommt eine kleine Erklärung zu dem, was in Zukunft mal hier zu erledigen ist.
                  Spannenden Insider und auch Theorie erwarten Sie schon bald hier ^^
                </div>
              </div>
              <!--Explanation End-->
            </div>
            <!--Body End-->
            <!--Task-->
            <div>
              <q-form>
                <!--Question 10-->
                <div>
                  <et-s-chat-nav class="q-px-md q-py-sm q-mb-lg"
                    ><span class="text text-weight-medium text-h6 text-left"
                      >Question 1: Wann wird EtS fertig sein?
                    </span></et-s-chat-nav
                  >
                  <et-s-chat-nav colortype="dark" direction="right" class="q-px-md q-py-sm q-mb-lg"
                    ><span class="text text-h6">{{ question2 }}</span></et-s-chat-nav
                  >
                  <div class="q-mr-sm q-mb-md">
                    <!--Radio Group (Invisible). Labels act as button/radio-->
                    <div class="checkbutton q-mb-lg">
                      <label>
                        <input type="radio" name="radioa3" value="HTML3.5" v-model="question2" />
                        <div class="text text-body1 q-my-sm">Januar 2023</div>
                      </label>
                      <label>
                        <input type="radio" name="radioa3" value="HTML5" v-model="question2" />
                        <div class="text text-body1 q-my-sm">Februar 2023</div>
                      </label>
                      <label>
                        <input type="radio" name="radioa3" value="HTML9" v-model="question2" />
                        <div class="text text-body1 q-my-sm">März 2023</div>
                      </label>
                      <label>
                        <input type="radio" name="radioa3" value="HTML4" v-model="question2" />
                        <div class="text text-body1 q-my-sm">April Fools! We never gonna finish</div>
                      </label>
                    </div>
                    <!--Radio Group End-->
                  </div>
                </div>
                <!--Question 10 End-->
              </q-form>
            </div>
            <!--Task End-->
            <!--Validation-->
            <!--Checkbar-->
            <div class="w-100 row justify-center items-start q-my-xl">
              <div class="col-6">
                <div
                  class="text-center fakebutton text-secondary subheader text-h5 text-weight-bold"
                >
                  Check
                </div>
                <div
                  class="text-center subheader text-grey text-caption text-italic text-weight-light"
                >
                  <span v-if="false">x Error/s found.</span>
                  <span v-else>0 Errors found.</span>
                  <span class="jumperlink">click here!</span>
                </div>
              </div>
              <div class="col-6 text-center subheader text-h6 text-weight-bold">
                <div class="text-center text-secondary subheader text-h5 text-weight-bold">
                  Go Next!
                </div>
                <div
                  class="text-center subheader text-grey text-caption text-italic text-weight-light"
                >
                  Check your Answers to get a Star
                </div>
              </div>
            </div>
            <!--Checkbar End-->
            <!--Validation End-->
          </div>
        </div>
        <!--Challenge End-->
        <div></div>
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

.checkbutton {
  text-align: right;
  font-weight: normal;
  color: grey;
}
.checkbutton label input {
  position: absolute;
  display: none;
  color: #fff !important;
}

.checkbutton input:checked + div {
  color: black !important;
}

.fakebutton {
  cursor: pointer;
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

.placeholderPreview {
  background-color: $accent;
  width: 100%;
  height: 20vh;
}

.lightbar {
  background-color: $secondary;
  width: 80%;
  height: 100%;
  max-height: 6vh;
  border-radius: 15px;
  position: relative;
}

.progressbar {
  background-color: $secondary;
  width: 95%;
  height: 100%;
  max-height: 12vh;
  border-radius: 15px;
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
import EtSChatNav from '../components/EtSChatNav.vue';

const question2 = ref('...');

onMounted(() => {
  for (let index = 0; index < pages; index++) {
    selectors.value.push(document.getElementById(index));
  }
  for (let index = 0; index < pages; index++) {
    selectors.value[index].classList.remove('ets-menu-highlight');
  }
  selectors.value[pointer.value - 1].classList.add('ets-menu-highlight');
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
    isDone: true,
    slide: 1,
  },
  {
    pl: '35%',
    pt: '18%',
    challenge: 'challenge2',
    icon: 'escaperoom/phChallenge.svg',
    scaling: '15vw',
    isDone: true,
    slide: 1,
  },
  {
    pl: '20%',
    pt: '10%',
    challenge: 'challenge1',
    icon: 'escaperoom/phChallenge.svg',
    scaling: '10vw',
    isDone: false,
    slide: 3,
  },
  {
    pl: '35%',
    pt: '18%',
    challenge: 'challenge2',
    icon: 'escaperoom/phChallenge.svg',
    scaling: '15vw',
    isDone: true,
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
