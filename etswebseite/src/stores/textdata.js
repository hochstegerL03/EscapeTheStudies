import { defineStore } from 'pinia';
import axios from 'axios';

export const useTextData = defineStore('textdata', {
  state: () => ({
    chapter1Story: [],
    chapter1Lection: [],
  }),
  actions: {
    async getStory1() {
      const { data } = await axios.get(
        'http://localhost:3000/escapethestudies/story?title=Chapter 1: Introduction: Environment und Setup',
      );
      this.chapter1Story = data;
    },
    async getLection1() {
      const { data } = await axios.get(
        'http://localhost:3000/escapethestudies/lection?title=Chapter 1: Introduction: Environment und Setup',
      );
      this.chapter1Lection = data;
    },
  },
  getters: {},
});
