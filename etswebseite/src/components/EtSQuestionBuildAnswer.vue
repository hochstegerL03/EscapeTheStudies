<template>
  <div>

    <EtSChatNav class="q-px-md q-py-sm q-mb-lg"
      ><span class="text text-weight-medium text-h6 text-left">{{
        question.question
      }}</span></EtSChatNav
    >
    <EtSChatNav colortype="dark" direction="right" class="q-px-md q-py-sm q-mb-lg"
      ><span v-if="showedAnswer.length > 0" class="text text-h5">{{ showedAnswer.join(' ') }}</span
      ><span v-else class="text text-h6">...</span></EtSChatNav
    >
    <div class="q-mr-md q-mb-md">
      <!--Radio Group (Invisible). Labels act as button/radio-->
      <div class="flex items-center justify-center q-gutter-md checkbuttonmulti">
        <label v-for="(answer, index) in question.answers" :key="index">
          <input
            type="checkbox"
            :name="`radio${question.id}`"
            :value="answer"
            v-model="showedAnswer"
          />
          <div class="text text-body1">{{ answer }}</div>
        </label>
      </div>
      <!--Radio Group End-->
    </div>
  </div>
</template>
<style scoped>
.checkbuttonmulti {
  text-align: right;
  font-weight: normal;
  color: grey;
}
.checkbuttonmulti label input {
  position: absolute;
  display: none;
  color: #fff !important;
}

.checkbuttonmulti input:checked + div {
  text-decoration: line-through;
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
