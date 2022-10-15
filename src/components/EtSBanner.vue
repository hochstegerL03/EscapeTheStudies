<template>
  <div class="banner">
    <slot />
  </div>
</template>
<style scoped>
.banner {
  background-image: v-bind(img);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
<script setup>
defineProps({
  img: { type: String, Default: 'none' },
});
</script>
