<script setup>
import { ref, onMounted } from 'vue';
import { useTextData } from '../stores/textdata.js';
// import EtSQuestionMutlipleChoice from '../components/EtSQuestionMutlipleChoice.vue';
// import EtSQuestionTextInput from '../components/EtSQuestionTextInput.vue';
// import EtSQuestionBuildAnswer from '../components/EtSQuestionBuildAnswer.vue';

const textStore = useTextData();
let lecture = ref();
let story = ref();

onMounted(async () => {
  await textStore.getStory1();
  await textStore.getLection1();
  console.log(textStore.chapter1Lection[0].code);
  lecture.value = textStore.chapter1Lection[0].code;
  story.value = textStore.chapter1Story[0].code;
});
</script>

<template>
  <div id="text" class="flex justify-center">
    <div class="ets-w-80" v-html="story" v-if="story"></div>
  </div>
  <div id="text" class="flex justify-center">
    <div class="ets-w-80" v-html="lecture" v-if="lecture"></div>
  </div>
</template>

<style lang="scss" scoped>
// Überarbeitet

//Typografie
.ets-text {
  font-family: 'Roboto', sans-serif;
}

.ets-header {
  font-family: 'Source Serif Pro', serif;
}

.ets-underline {
  text-decoration: underline;
}

.ets-image-capped {
  max-height: 10rem;
}

.ets-text-shadow {
  text-shadow: 5px 5px 5px black;
}

.ets-lightbar {
  background-color: $secondary;
  width: 80%;
  height: 100%;
  max-height: 6vh;
  border-radius: 0vw 15px 15px 15px;
  z-index: 1;
  position: relative;
}

//Elements
.ets-button-menu {
  background-color: $secondary;
  color: white;
  height: 8vh;
  border-radius: 20px 20px 0px 0px;
  width: 100%;
}

.ets-banner {
  max-height: 50vh;
  background-color: $secondary;
}

.ets-banner-small {
  max-height: 20vh;
  background-color: $secondary;
}

.placeholder {
  background-color: $accent;
}

@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.ets-title {
  font-family: 'Lobster', cursive;
}

.ets-fake-button {
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.placeholder-preview {
  background-color: $accent;
  width: 100%;
  height: 25vh;
}

.ets-disabled {
  opacity: 0.5;
  pointer-events: none;
}

.ets-text-mono {
  font-family: 'Roboto Mono', monospace;
}
a {
  color: $secondary;
  text-decoration: none;
}
a:link {
  color: $secondary;
}

a:visited {
  color: $primary;
}

a:hover {
  color: $primary;
}

a:active {
  color: $primary;
}

.ets-w-100 {
  width: 100% !important;
}
.ets-w-90 {
  width: 90%;
  max-width: 1024px;
}
.ets-w-80 {
  width: 80% !important;
}

.ets-w-50 {
  width: 50% !important;
}

.ets-max-screen-800 {
  max-width: 800px;
}

.ets-h-100 {
  height: 100% !important;
}

.ets-card-lection {
  border-radius: 15px;
}

.ets-card-lection-start {
  border-radius: 15px 0px 0px 15px;
}

.ets-card-lection-end {
  border-radius: 0px 15px 15px 0px;
  height: 100% !important;
}

.ets-font-icon {
  height: 100% !important;
  font-size: 2rem;
  color: white;
}

.ets-overflow-scroll {
  white-space: nowrap;
  overflow: auto;
}
.ets-overflow-scroll::-webkit-scrollbar {
  display: none;
}
.ets-image {
  max-width: 500px;
}
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
