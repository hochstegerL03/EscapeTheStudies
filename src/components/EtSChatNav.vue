<template>
  <div
    :class="[direction, colortype]"
    class="flex justify-center items-center chat text-weight-bolder text-center text-h5"
  >
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.chat {
  width: 100%;
  height: 100%;
}
.left {
  border-radius: 0vw 15px 15px 15px;
}
.right {
  border-radius: 15px 0vw 15px 15px;
}
.light {
  background-color: $accent;
  color: black;
}

.white {
  background-color: white;
  color: black;
}

.dark {
  background-color: $primary;
  color: white;
}
</style>
<script setup>
defineProps({
  colortype: { type: String, default: 'light' },
  direction: { type: String, default: 'left' },
});
</script>
