<script setup>
import { ref, onMounted } from 'vue';
import { useCourseStore } from '../stores/course.js';
import data from '../assets/chapters.json';

console.log(data.chapters[0].content);

const courseStore = useCourseStore();
let course = ref([]);
let answer = ref([]);
let question = ref([]);
let test = ref();

onMounted(async () => {
  await courseStore.getCourse();
  await courseStore.getQuestion(1);
  await courseStore.getAnswers();
  course.value = courseStore.course;
  answer.value = courseStore.answers;
  question.value = courseStore.question;
  test.value = data.chapters[0].content;
});
</script>

<template>
  <div>
    <div v-html="test"></div>
  </div>
</template>
