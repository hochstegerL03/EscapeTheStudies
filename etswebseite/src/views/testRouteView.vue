<script setup>
import { ref, onMounted } from 'vue';
import { useCourseStore } from '../stores/course.js';

const courseStore = useCourseStore();
let course = ref([]);
let answer = ref([]);
let question = ref([]);

onMounted(async () => {
  await courseStore.getCourse();
  await courseStore.getQuestion(1);
  await courseStore.getAnswers();
  course.value = courseStore.course;
  answer.value = courseStore.answers;
  question.value = courseStore.question;
});
</script>

<template>
  <div>
    <h4>{{ course }}</h4>
    <h4>{{ answer }}</h4>
    <h4>{{ question }}</h4>
  </div>
</template>
