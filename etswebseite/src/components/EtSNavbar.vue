<template>
  <q-toolbar-title>
    <div class="row items-center q-my-md">
      <div class="col-3" @click="$router.push('/')">
        <q-avatar>
          <img src="svgs/logo.svg" />
        </q-avatar>
      </div>
      <div class="col-6 text-center" @click="$router.push('/')">
        <span class="ets-title"><b>E</b>scape <b>t</b>he <b>S</b>tudies</span>
      </div>
      <div class="col-3">
        <q-btn
          class="float-right q-mr-md"
          dense
          flat
          round
          icon="menu"
          @click="$emit('showRightMenu')"
        />
      </div>
    </div>
  </q-toolbar-title>
</template>

<style scoped></style>

<script setup>
defineEmits(['showRightMenu']);
</script>
