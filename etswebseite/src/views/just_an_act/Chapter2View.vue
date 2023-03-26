<template>
  <div>
    <!--Menu-->
    <div class="fixed-bottom-right ets-absolute-top">
      <div
        @click="scrolltovertically('text')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 ets-w-100 ets-fake-button">t</div>
      </div>
      <div
        @click="scrolltovertically('lection')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 ets-w-100 ets-fake-button">l</div>
      </div>
      <div
        @click="scrolltovertically('questions')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-start justify-center ets-h-100 ets-w-100 ets-fake-button">q</div>
      </div>
      <div
        @click="showmenu = !showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 ets-w-100">i</div>
      </div>
    </div>
    <!--Menu End-->
    <div id="text" class="flex justify-center">
      <div class="ets-w-80" v-html="story" v-if="story"></div>
    </div>
    <div id="lection" class="flex justify-center">
      <div class="ets-w-80" v-html="lecture" v-if="lecture"></div>
    </div>
  </div>
  <div id="questions" class="flex justify-center">
    <!--Body/Text-->
    <div class="ets-w-80">
      <!--Header-->
      <div>
        <div class="text text-h4 text-weight-regular q-my-md">Questions</div>
      </div>
      <!--Header End-->
      <!--Body/Text End-->
    </div>
    <!--Part 1: Story End-->
  </div>
  <div class="flex justify-center">
    <div class="ets-w-80">
      <q-form>
        <div v-for="question in questions" :key="question.questionid">
          <!--Multiple Choice Question-->
          <EtSQuestionMutlipleChoice
            v-if="question.questiontype.questiontype == 'MultipleChoice'"
            @changeAnswer="changeAnswer"
            :question="question"
          ></EtSQuestionMutlipleChoice>
          <!--Multiple Choice Question End-->
          <!--Text Input Question-->
          <EtSQuestionTextInput
            v-else-if="question.type == 'TextInput'"
            @changeAnswer="changeAnswer"
            :question="question"
          >
          </EtSQuestionTextInput>
          <!--Text Input Question End-->
          <!--Build Answer Question-->
          <EtSQuestionBuildAnswer
            v-else-if="question.type === 'Text Ordering'"
            @changeAnswer="changeAnswer"
            :question="question"
          ></EtSQuestionBuildAnswer>
          <!--Build Answer Question End-->
        </div>
      </q-form>
    </div>
    <!--Questions End-->
    <!--Checkbar-->
    <div class="ets-w-100 row justify-center items-start q-my-xl">
      <div class="col-6">
        <div
          class="text-center ets-fake-button text-secondary ets-header text-h5 text-weight-bold"
          @click="trySub()"
        >
          Check
        </div>
        <div class="text-center ets-header text-grey text-caption text-italic text-weight-light">
          <span v-if="falseQ.length > 0">{{ falseQ.length }} Error/s found.</span>
          <span v-else>0 Errors found.</span>
          <span class="ets-underline">click here!</span>
        </div>
      </div>
      <div class="col-6 text-center ets-header text-h6 text-weight-bold">
        <div class="text-center text-secondary ets-header text-h5 text-weight-bold">Go Next!</div>
        <div class="text-center ets-header text-grey text-caption text-italic text-weight-light">
          Check your Answers to get a Star
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ets-absolute-top {
  z-index: 999;
}
.ets-bubble-menu {
  background-color: $secondary;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
</style>
<script setup>
import { scroll } from 'quasar';
import { ref, onMounted } from 'vue';
import { useTextData } from '../../stores/textdata.js';
import axios from 'axios';
import EtSQuestionMutlipleChoice from '../../components/EtSQuestionMutlipleChoice.vue';
import EtSQuestionTextInput from '../../components/EtSQuestionTextInput.vue';
import EtSQuestionBuildAnswer from '../../components/EtSQuestionBuildAnswer.vue';

const textStore = useTextData();
let lecture = ref();
let story = ref();
let questions = ref([]);
let answer = ref([]);
let qa = ref({});

onMounted(async () => {
  await textStore.getStory2();
  await textStore.getLection2();
  lecture.value = textStore.chapter2Lection[0].code;
  story.value = textStore.chapter2Story[0].code;
  const serQ = await axios.get(
    'http://localhost:3000/escapethestudies/question?title=Chapter 2: Was ist HTML - The Constructor',
  );
  questions.value = serQ.data;
  console.log(questions.value[0].questiontype.questiontype);
  const serA = await axios.get('http://localhost:3000/escapethestudies/answers');
  for (let index = 0; index < questions.value.length; index++) {
    answer.value.push(serA.data.filter((el) => el.questionid == questions.value[index].questionid));
  }
  for (let index = 0; index < questions.value.length; index++) {
    Object.assign(questions.value[index], answer.value[index]);
  }
  qa.value = questions.value[0][0];
  console.log(qa.value.answeroptions);
});
function changeAnswer(answer, id) {
  questions.value[questions.value.findIndex((el) => el.id == id)].showedAnswer = answer;
}

// const re = RegExp(
//   /^\s*(let|var|const)*(?<name> change| yo|Life always Changes| climateChange|true).+\;/gm,
// );

const showmenu = ref(false);
// const hint1 = ref(false);

const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrolltovertically(obj) {
  const el = document.getElementById(obj);
  const target = getScrollTarget();
  const offset = el.offsetTop - 50;
  const duration = 1000;
  setVerticalScrollPosition(target, offset, duration);
}

const trySub = () => {};
</script>
