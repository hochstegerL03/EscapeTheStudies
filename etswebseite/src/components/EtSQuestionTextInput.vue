<template>
  <div>
    <EtSChatNav class="q-px-md q-py-sm q-mb-lg"
      ><span class="text text-weight-medium text-h6 text-left"
        >{{ question.question }}
      </span></EtSChatNav
    >
    <EtSChatNav colortype="dark" direction="right" class="q-px-md q-py-sm q-mb-lg">
      <div class="flex items-center justify-center h-100 w-100">
        <textarea
          placeholder="Type here ..."
          class="text-white ets-text-mono inputbubble text-h6"
          v-model="showedAnswer"
        ></textarea>
      </div>
    </EtSChatNav>
  </div>
</template>
<style scoped>
.inputbubble {
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  min-height: 7rem;
}
.inputbubble:focus {
  border: none;
  outline: none;
}

textarea {
  resize: vertical;
  overflow: hidden;
}

textarea::-webkit-input-placeholder {
  color: white;
}

textarea:-moz-placeholder {
  /* Firefox 18- */
  color: white;
}

textarea::-moz-placeholder {
  /* Firefox 19+ */
  color: white;
}

textarea:-ms-input-placeholder {
  color: white;
}

textarea::placeholder {
  color: white;
}
</style>
<script setup>
import { ref, watch, unref } from 'vue';
import EtSChatNav from '../components/EtSChatNav.vue';
const showedAnswer = ref(unref(props.question[0].showedAnswer));
const props = defineProps({
  question: Object,
});
const emit = defineEmits(['changeAnswer']);
watch(showedAnswer, async () => {
  emit('changeAnswer', showedAnswer, props.question.id);
});
</script>
