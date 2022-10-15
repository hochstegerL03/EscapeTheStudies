<template>
  <q-toolbar-title>
    <div class="row items-center q-my-md">
      <div class="col-3">
        <q-avatar>
          <img src="/svgs/logo.svg" />
        </q-avatar>
      </div>
      <div class="col-6 text-center">
        <span class="subheader ">Escape the Studies</span>
      </div>
      <div class="col-3">
        <q-btn class="float-right q-mr-md" dense flat round icon="menu" @click="$emit('showRightMenu')" />
      </div>
    </div>
  </q-toolbar-title>
</template>

<style scoped>

</style>

<script setup>
defineEmits(['showRightMenu']);
</script>
