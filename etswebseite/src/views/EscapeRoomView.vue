<template>
  <div>
    <!--Content-->
    <div class="flex justify-center ets-w-100 q-mt-lg">
      <div class="ets-w-100">
        <!--Escape Room Visual Top-->
        <div class="flex justify-center items-center q-mb-sm">
          <!--Main Window-->
          <div id="news" class="ets-escape-room-container q-py-md">
            <div class="row ets-escape-room-ui-container placeholder">
              <div class="col-2">
                <div class="flex ets-h-100 justify-center items-center">
                  <img
                    @click="changeRoom('left')"
                    class="w-70 ets-max-5"
                    src="escaperoom/PointerLeft.svg"
                  />
                </div>
              </div>
              <div class="col-8">
                <!--Escape Room Content-->
                <main class="ets-w-100 ets-h-100">
                  <div class="ets-w-100 ets-h-100">
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
                <div class="flex ets-h-100 justify-center items-center">
                  <img
                    @click="changeRoom('right')"
                    class="w-70 ets-max-5"
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
                      <div class="ets-side-bar">
                        <div class="flex items-center justify-center">
                          <div
                            class="q-gutter-x-lg text-white text-center ets-header text-weight-bold text-body1"
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
                <div class="ets-progressbar q-py-xs">
                  <div class="flex items-center justify-center">
                    <div class="q-gutter-x-md text-white ets-title text-weight-regular text-h5">
                      <span v-for="(slide, index) in slides" :key="index" :id="index">
                        <span v-if="slide.isDone">c{{ index + 1 }}</span>
                        <span v-else class="disabled">c{{ index + 1 }}</span>
                      </span>
                    </div>
                    <div
                      class="q-ml-lg q-gutter-x-sm text-right text-white ets-title text-weight-regular text-h6"
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
          <div class="ets-w-90" v-if="renderTask">
            <!--Caption-->
            <div class="q-mt-lg">
              <div class="text-h5 text-bold ets-header">{{ showedTask.title }}</div>
            </div>
            <!--Caption End-->
            <!--Body-->
            <div>
              <!--Preview-->
              <div>
                <div class="placeholder-preview q-mt-md">
                  <!--Note: durch Image ersetzen-->
                </div>
              </div>
              <!--Preview End-->
              <!--Explanation-->
              <div>
                <div class="text text-h6 text-weight-regular q-my-md">
                  {{ showedTask.info }}
                </div>
              </div>
              <!--Explanation End-->
            </div>
            <!--Body End-->
            <!--Task-->
            <div>
              <!--Multiple Choice Question-->
              <EtSQuestionMutlipleChoice
                v-if="showedTask.challenge.type == 'multipleChoice'"
                @changeAnswer="changeAnswer"
                :question="showedTask.challenge"
              ></EtSQuestionMutlipleChoice>
              <!--Multiple Choice Question End-->
              <!--Text Input Question-->
              <EtSQuestionTextInput
                v-else-if="showedTask.challenge.type == 'textInput'"
                @changeAnswer="changeAnswer"
                :question="showedTask.challenge"
              >
              </EtSQuestionTextInput>
              <!--Text Input Question End-->
              <!--Build Answer Question-->
              <EtSQuestionBuildAnswer
                v-else-if="showedTask.challenge.type === 'buildAnswer'"
                @changeAnswer="changeAnswer"
                :question="showedTask.challenge"
              ></EtSQuestionBuildAnswer>
              <!--Build Answer Question End-->
            </div>
            <!--Task End-->
            <!--Validation-->
            <!--Checkbar-->
            <div class="ets-w-100 row justify-center items-start q-my-xl">
              <div class="col-6">
                <div
                  class="text-center ets-fake-button text-secondary ets-header text-h5 text-weight-bold"
                >
                  Check
                </div>
                <div
                  class="text-center ets-header text-grey text-caption text-italic text-weight-light"
                >
                  <span v-if="false">x Error/s found.</span>
                  <span v-else>0 Errors found.</span>
                  <span class="ets-underline">click here!</span>
                </div>
              </div>
              <div class="col-6 text-center ets-header text-h6 text-weight-bold">
                <div
                  class="text-center ets-fake-button text-secondary ets-header text-h5 text-weight-bold"
                >
                  Go Next!
                </div>
                <div
                  class="text-center ets-header text-grey text-caption text-italic text-weight-light"
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
      </div>
    </div>
  </div>
  <!--Content End-->
</template>

<style lang="scss" scoped>
.ets-max-5 {
  max-width: 5rem !important;
}
.ets-menu-highlight {
  color: $primary;
}

.ets-escape-room-container {
  width: 100%;
  height: 50vh;
}

.ets-escape-room-ui-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.ets-progressbar {
  background-color: $secondary;
  width: 95%;
  height: 100%;
  max-height: 12vh;
  border-radius: 15px;
}

.ets-side-bar {
  background-color: $secondary;
  width: 95%;
  max-width: 12rem;
  margin-bottom: 0.5rem;
  height: 100%;
  max-height: 12vh;
  border-radius: 15px;
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
import EtSQuestionMutlipleChoice from '../components/EtSQuestionMutlipleChoice.vue';
import EtSQuestionTextInput from '../components/EtSQuestionTextInput.vue';
import EtSQuestionBuildAnswer from '../components/EtSQuestionBuildAnswer.vue';

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
const showedTask = ref(null);
const renderTask = ref(false);
function changeAnswer(answer, id) {
  challenge1.value.showedAnswer = answer;
}
const challenge1 = ref({
  id: 1,
  type: 'multipleChoice',
  description:
    'Lass uns damit mal mit ein paar einfachen und allgemeinen Fragen starten! Achtung, nicht alle Fragen sind in der derzeitigen Lektion erklärt!',
  question:
    'Welche drei “Programmiersprachen” werden für eine moderne/zeitgemäße Website benötigt?',
  answers: ['JavaScript, HTML, CSS.', 'JavaScript, Vue, C#.', 'HTML ,CSS, Python.'],
  showedAnswer: '',
  correctAnswer: 'JavaScript, HTML, CSS.',
});
const task1 = {
  title: 'Challenge 1',
  banner: '',
  info: 'Hier kommt eine kleine Erklärung zu dem, was in Zukunft mal hier zu erledigen ist. Spannenden Insider und auch Theorie erwarten Sie schon bald hier ^^',
  challenge: challenge1,
};
const task2 = {
  title: 'Challenge 2',
  banner: '',
  info: 'Tada! Es hat gewechselt. Cool oder?',
  challenge: challenge1,
};

const slides = [
  {
    pl: '20%',
    pt: '10%',
    challenge: task1,
    icon: 'escaperoom/phChallenge.svg',
    scaling: '10vw',
    isDone: true,
    slide: 1,
  },
  {
    pl: '35%',
    pt: '18%',
    challenge: task2,
    icon: 'escaperoom/phChallenge.svg',
    scaling: '15vw',
    isDone: true,
    slide: 1,
  },
  {
    pl: '20%',
    pt: '10%',
    challenge: task1,
    icon: 'escaperoom/phChallenge.svg',
    scaling: '10vw',
    isDone: false,
    slide: 3,
  },
  {
    pl: '35%',
    pt: '18%',
    challenge: task2,
    icon: 'escaperoom/phChallenge.svg',
    scaling: '15vw',
    isDone: true,
    slide: 2,
  },
];
function challenge(obj) {
  showedTask.value = obj;
  if (showedTask.value) renderTask.value = true;
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
