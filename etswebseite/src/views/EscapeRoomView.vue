<template>
  <div class="ets-w-100">
    <!--Content-->
    <div class="flex justify-center ets-w-100 q-my-lg">
      <div class="ets-w-100">
        <!--Escape Room Visual Top-->
        <div class="q-py-md">
          <div class="relative-position" v-if="slides[0]">
            <q-img :src="slides[pointer - 1].wall.roomimage" />
            <div class="row ets-w-100 ets-h-100 absolute absolute-top">
              <!--Left Overlay-->
              <div class="col-1">
                <div class="flex ets-h-100 justify-center items-center">
                  <img
                    @click="changeRoom('left')"
                    class="ets-w-80 ets-max-5"
                    src="escaperoom/PointerLeft.svg"
                  />
                </div>
              </div>
              <!--Left Overlay End-->
              <!--Main Overlay-->
              <div class="col-10">
                <!--Escape Room Content-->
                <main class="ets-w-100 ets-h-100">
                  <div class="ets-w-100 ets-h-100" v-if="slides[0]">
                    <div
                      v-for="(slide, index) in slides.filter((ch) => ch.slideid == pointer + pages)"
                      :key="index"
                      :style="`position: absolute; left: ${slide.pl}; top: ${slide.pt};`"
                    >
                      <div @click="challenge(slide)" :style="`width: ${slide.scaling}; `">
                        <q-btn
                          round
                          class="bg-white"
                          :style="`width: ${slide.scaling}; height: ${slide.scaling}; opacity: 0.2;`"
                        ></q-btn>
                      </div>
                    </div>
                  </div>
                </main>
                <!--Escape Room Content End-->
              </div>
              <!--Main Overlay End-->
              <!--Right Overlay-->
              <div class="col-1">
                <div class="flex ets-h-100 justify-center items-center">
                  <img
                    @click="changeRoom('right')"
                    class="ets-w-80 ets-max-5"
                    src="escaperoom/PointerRight.svg"
                  />
                </div>
              </div>
              <!--Right Overlay End-->
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
                            v-if="slides[0]"
                          >
                            <span
                              class="ets-fake-button"
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
        </div>
        <!--Escape Room Visual Top End-->
        <!--Progress-Bar-->
        <div class="">
          <div class="row justify-center items-center">
            <div class="col-12">
              <div class="flex justify-center">
                <div class="ets-progressbar q-py-xs">
                  <div class="flex items-center justify-center" v-if="slides[0]">
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
        <!--Progress Bar End-->
        <!--Text / Challenge Content-->
        <div class="flex justify-center ets-w-100" v-if="escaperoom[0]">
          <div class="ets-w-90" v-html="escaperoom[0].story.code"></div>
        </div>
        <div class="flex justify-center ets-w-100">
          <div class="ets-w-90" v-if="renderTask">
            <!--Caption-->
            <div class="q-mt-lg">
              <div class="text-h5 text-bold ets-header">{{ showedTask.item.description }}</div>
            </div>
            <!--Caption End-->
            <!--Body-->
            <div>
              <!--Preview-->
              <div>
                <div class="q-mt-md">
                  <!--Insert IMG here-->
                </div>
              </div>
              <!--Preview End-->
              <!--Explanation-->
              <div>
                <div class="text text-h6 text-weight-regular q-my-md"></div>
              </div>
              <!--Explanation End-->
            </div>
            <!--Body End-->
            <!--Task-->
            <div v-if="renderTask">
              {{ showedTask.item.challenge.question[0] }}
              <!-- Multiple Choice Question-->
              <EtSQuestionMutlipleChoice
                v-if="
                  showedTask.item.challenge.question.questiontype.questiontype == 'MultipleChoice'
                "
                @changeAnswer="changeAnswer"
                :question="question"
              ></EtSQuestionMutlipleChoice>
              <!--Multiple Choice Question End-->
              <!--Text Input Question-->
              <EtSQuestionTextInput
                v-else-if="
                  showedTask.item.challenge.question.questiontype.questiontype == 'TextInput'
                "
                @changeAnswer="changeAnswer"
                :question="question"
              >
              </EtSQuestionTextInput>
              <!--Text Input Question End-->
              <!--Build Answer Question-->
              <EtSQuestionBuildAnswer
                v-else-if="
                  showedTask.item.challenge.question.questiontype.questiontype === 'Text Ordering'
                "
                @changeAnswer="changeAnswer"
                :question="question"
              ></EtSQuestionBuildAnswer>
              <!--Build Answer Question End -->
            </div>
            <!--Task End-->
            <!--Validation-->
            <!--Checkbar-->
            <div class="ets-w-100 row justify-center items-start q-my-xl">
              <div class="col-6">
                <div
                  @click="trySub(showedTask)"
                  class="text-center ets-fake-button text-secondary ets-header text-h5 text-weight-bold"
                >
                  Check
                </div>
                <div
                  class="text-center ets-header text-grey text-caption text-italic text-weight-light"
                >
                  <span>Check if your answer is correct!</span>
                  <!-- <span v-if="falseQ.length > 0">{{ falseQ.length }} Error/s found.</span>
                  <span v-else>0 Errors found.</span> -->
                  <!-- <span class="ets-underline">click here!</span> -->
                </div>
              </div>
              <div
                class="col-6 text-center ets-header text-h6 text-weight-bold"
                v-if="doneQ"
                @click="$router.push('/cooverview')"
              >
                <div
                  class="text-center ets-fake-button text-secondary ets-header text-h5 text-weight-bold"
                >
                  Escape!
                </div>
                <div
                  class="text-center ets-header text-grey text-caption text-italic text-weight-light"
                >
                  Escape the Escape Room
                </div>
              </div>
            </div>
            <!--Checkbar End-->
            <!--Validation End-->
          </div>
        </div>
        <!--Text / Challenge Content End-->
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
import axios from 'axios';
import { useQuasar } from 'quasar';

onMounted(async () => {
  try {
    const er = await axios.get('http://localhost:3000/escapethestudies/escaperoom');
    escaperoom.value = er.data;
    const sl = await axios.get('http://localhost:3000/escapethestudies/slide');
    slides.value = sl.data;
    const serC = await axios.get('http://localhost:3000/escapethestudies/challenge');
    chall.value = serC.data;
    const serA = await axios.get('http://localhost:3000/escapethestudies/answers');
    for (let index = 0; index < chall.value.length; index++) {
      answer.value.push(serA.data.filter((el) => el.questionid == chall.value[index].questionid));
    }
    answer.value.showedAnswer = '';
    for (let index = 0; index < slides.value.length; index++) {
      Object.assign(slides.value[index], answer.value[index]);
    }
    for (let index = 0; index < slides.value.length; index++) {
      if (newId.value !== slides.value[index].wallid) {
        newId.value = slides.value[index].wallid;
        pages.value += 1;
      }
    }
    for (let index = 0; index < pages.value; index++) {
      selectors.value.push(document.getElementById(index));
    }
    for (let index = 0; index < pages.value; index++) {
      selectors.value[index].classList.remove('ets-menu-highlight');
      // console.log(selectors.value);
    }
    selectors.value[pointer.value - 1].classList.add('ets-menu-highlight');
  } catch (err) {
    console.log(err);
  }
});

const chall = ref([]);
const newId = ref(0);
const pages = ref(0);
const answer = ref([]);
const questions = ref([]);
// const challenges = ref([]);
const selectors = ref([]);
const slides = ref([]);
const escaperoom = ref([]);
const pointer = ref(1);
const showedTask = ref(null);
const renderTask = ref(false);
const question = ref(null);
const falseQ = ref([]);
const rightQ = ref([]);
const doneQ = ref(false);
// let answer = ref([]);
const $q = useQuasar();

function changeAnswer(answer, id) {
  // console.log(answer);
  // console.log(id);
  //neuen Wert an Questions showedAnswer = answer
  // console.log(questions.value[questions.value.findIndex((el) => el.questionid == id)]);
  questions.value[questions.value.findIndex((el) => el.questionid == id)].showedAnswer = answer;
}

// const task1 = {
//   title: 'Challenge 1',
//   banner: '',
//   info: 'Hier kommt eine kleine Erklärung zu dem, was in Zukunft mal hier zu erledigen ist. Spannenden Insider und auch Theorie erwarten Sie schon bald hier ^^',
//   challenge: challenge1,
// };
// const task2 = {
//   title: 'Challenge 2',
//   banner: '',
//   info: 'Tada! Es hat gewechselt. Cool oder?',
//   challenge: challenge1,
// };

// const slides = [
//   {
//     pl: '58%',
//     pt: '5%',
//     challenge: task1,
//     icon: 'escaperoom/phChallenge.svg',
//     scaling: '10%',
//     isDone: true,
//     slide: 1,
//     img: 'images/wand1.png',
//   },
//   {
//     pl: '41%',
//     pt: '70%',
//     challenge: task2,
//     icon: 'escaperoom/phChallenge.svg',
//     scaling: '15vw',
//     isDone: true,
//     slide: 2,
//     img: 'images/wand2.png',
//   },
//   {
//     pl: '70%',
//     pt: '75%',
//     challenge: task1,
//     icon: 'escaperoom/phChallenge.svg',
//     scaling: '10vw',
//     isDone: false,
//     slide: 3,
//     img: 'images/wand3.png',
//   },
//   {
//     pl: '50%',
//     pt: '55%',
//     challenge: task1,
//     icon: 'escaperoom/phChallenge.svg',
//     scaling: '10vw',
//     isDone: false,
//     slide: 4,
//     img: 'images/wand4.png',
//   },
//   // pl: '40%',
//   // pt: '40%',
// ];
async function challenge(obj) {
  const id = obj.item.challenge.questionid;
  const serQ = await axios.get(
    `http://localhost:3000/escapethestudies/question?title=Chapter 5: ER`,
  );
  questions.value = serQ.data;
  for (let index = 0; index < questions.value.length; index++) {
    // console.log(questions.value[index].questiontype.questiontype);
    if (questions.value[index].questiontype.questiontype == 'Text Ordering') {
      questions.value[index].showedAnswer = [];
    } else {
      questions.value[index].showedAnswer = '';
    }
  }

  for (let index = 0; index < questions.value.length; index++) {
    Object.assign(questions.value[index], answer.value[index]);
  }
  let qa = questions.value.filter((el) => el.questionid == id);
  question.value = qa[0];
  showedTask.value = obj;
  if (showedTask.value) renderTask.value = true;
  escaperoom.value = false;
}
function changeRoom(direction) {
  if (direction == 'left' && pointer.value > 1) {
    pointer.value--;
  } else if (direction == 'left' && pointer.value == 1) {
    pointer.value = pages.value;
  } else if (direction == 'right' && pointer.value < pages.value) {
    pointer.value++;
  } else {
    pointer.value = 1;
  }
  for (let index = 0; index < pages.value; index++) {
    selectors.value[index].classList.remove('ets-menu-highlight');
  }
  selectors.value[pointer.value - 1].classList.add('ets-menu-highlight');
}
function changeRoomMenu(index) {
  pointer.value = index + 1;
  for (let index = 0; index < pages.value; index++) {
    selectors.value[index].classList.remove('ets-menu-highlight');
  }
  selectors.value[pointer.value - 1].classList.add('ets-menu-highlight');
}

const trySub = (showedTask) => {
  let uAns;
  for (let index = 0; index < questions.value.length; index++) {
    let dAns = answer.value[index][0].correctanswer;
    if (questions.value[index].questionid == showedTask[0].questionid) {
      if (questions.value[index].questiontype.questiontype == 'Text Ordering') {
        uAns = questions.value[index].showedAnswer.join(' ');
        if (uAns.includes(dAns)) {
          if (isInArray(questions.value[index].questionid, rightQ.value) == false) {
            rightQ.value.push(questions.value[index].questionid);
            doneEr();
            return $q.notify({
              message: 'Richtig',
              color: 'positive',
              position: 'top',
            });
          } else {
            doneEr();
            return $q.notify({
              message: 'Richtig',
              color: 'positive',
              position: 'top',
            });
          }
        } else {
          falseQ.value.push(questions.value[index].questionid);
          return $q.notify({
            message: 'Falsch',
            color: 'negative',
            position: 'top',
          });
        }
      }
      uAns = questions.value[index].showedAnswer;
      if (uAns == dAns) {
        if (isInArray(questions.value[index].questionid, rightQ.value) == false) {
          rightQ.value.push(questions.value[index].questionid);
          doneEr();
          return $q.notify({
            message: 'Richtig',
            color: 'positive',
            position: 'top',
          });
        }
        doneEr();
        return $q.notify({
          message: 'Richtig',
          color: 'positive',
          position: 'top',
        });
      } else {
        falseQ.value.push(questions.value[index].questionid);
        return $q.notify({
          message: 'Falsch',
          color: 'negative',
          position: 'top',
        });
      }
    }
  }
};

function doneEr() {
  if (rightQ.value.length >= 4) {
    doneQ.value = true;
  }
}

function isInArray(value, array) {
  return array.indexOf(value) !== -1;
}
</script>
