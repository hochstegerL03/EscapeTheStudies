<template>
  <div class="text-center q-ma-lg">
    <h4 class="titelold q-my-sm text-weight-bolder">{{ titel }}</h4>
    <p class="subheader h4b5 text-h6 q-mb-xs">{{ content }}</p>
    <a class="text-italic text-body1 text-weight-light" :href="url">{{ link }}</a>
  </div>
</template>
<style scoped>

.h4b5 {
  font-size: 1.6rem;
}
</style>
<script setup>
const props = defineProps({
  titel: String,
  content: String,
  link: String,
  url: String,
});
</script>
