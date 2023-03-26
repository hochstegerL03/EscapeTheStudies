<template>
  <div>
    <!--Menu-->
    <div class="fixed-bottom-right ets-absolute-top">
      <div
        @click="scrolltovertically('text')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 ets-w-100 ets-fake-button">t</div>
      </div>
      <div
        @click="scrolltovertically('lection')"
        v-if="showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 ets-w-100 ets-fake-button">l</div>
      </div>
      <div
        @click="showmenu = !showmenu"
        class="ets-bubble-menu ets-title text-h3 q-my-md q-mx-lg text-white text-center"
      >
        <div class="flex items-center justify-center ets-h-100 ets-w-100">i</div>
      </div>
    </div>
    <!--Menu End-->
    <div id="text" class="flex justify-center">
      <div class="ets-w-80" v-html="story" v-if="story"></div>
    </div>
    <div id="lection" class="flex justify-center">
      <div class="ets-w-80" v-html="lecture" v-if="lecture"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
<script setup>
import { scroll } from 'quasar';
import { ref, onMounted } from 'vue';
import { useTextData } from '../../stores/textdata.js';

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

const showmenu = ref(false);

const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrolltovertically(obj) {
  const el = document.getElementById(obj);
  const target = getScrollTarget();
  const offset = el.offsetTop - 50;
  const duration = 1000;
  setVerticalScrollPosition(target, offset, duration);
}
</script>
