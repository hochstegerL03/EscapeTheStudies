<template>
  <div>
    <div class="flex">
      <div class="w-90 text text-h6 text-weight-regular q-mb-lg">
        {{ question.description }}
      </div>
    </div>
    <EtSChatNav class="q-px-md q-py-sm q-mb-lg"
      ><span class="text text-weight-medium text-h6 text-left">{{
        question.question
      }}</span></EtSChatNav
    >
    <EtSChatNav colortype="dark" direction="right" class="q-px-md q-py-sm q-mb-lg"
      ><span class="text text-h6">{{ question.showedAnswer }}</span></EtSChatNav
    >
    <div class="q-mr-md q-mb-md">
      <!--Radio Group (Invisible). Labels act as button/radio-->
      <div class="checkbutton">
        <label v-for="(answer, index) in question[0].answeroptions" :key="index">
          <input
            type="radio"
            :name="`radio${question.id}`"
            :value="answer"
            v-model="showedAnswer"
          />
          <div class="text text-body1 q-my-sm">{{ answer }}</div>
        </label>
      </div>
      <!--Radio Group End-->
    </div>
  </div>
</template>
<style scoped>
.checkbutton {
  text-align: right;
  font-weight: normal;
  color: grey;
}
.checkbutton label input {
  position: absolute;
  display: none;
  color: #fff !important;
}

.checkbutton input:checked + div {
  color: black !important;
}
</style>
<script setup>
import { ref, watch, unref } from 'vue';
import EtSChatNav from '../components/EtSChatNav.vue';
const showedAnswer = ref(unref(props.question.showedAnswer));
const props = defineProps({
  question: Object,
});
const emit = defineEmits(['changeAnswer']);
watch(showedAnswer, async () => {
  emit('changeAnswer', showedAnswer, props.question.id);
});
</script>
