<template>
  <div class="text-center q-ma-lg">
    <h4 class="titelold q-my-sm text-weight-bolder">{{ titel }}</h4>
    <p class="ets-header ets-text-header text-h6 q-mb-xs">{{ content }}</p>
    <a class="ets-header text-italic text-body1 text-weight-light" :href="url">{{ link }}</a>
  </div>
</template>
<style scoped>

.ets-text-header {
  font-size: 1.6rem;
}
</style>
<script setup>
defineProps({
  titel: String,
  content: String,
  link: String,
  url: String,
});
</script>
