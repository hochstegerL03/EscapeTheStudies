<template>
  <q-tabs align="justify" class="ets-text text-weight-bold">
    <q-route-tab to="/" class="ets-text-tab">Home</q-route-tab>

    <q-route-tab to="/courses" class="ets-text-tab">Courses</q-route-tab>
    <q-route-tab to="/about" class="ets-text-tab">About us</q-route-tab>
  </q-tabs>
</template>
<style scoped>
.ets-text-tab {
  font-size: calc(100% + 0.5vw) !important;
  line-height: calc(200% + 1vw) !important;
}
</style>
<script setup></script>
