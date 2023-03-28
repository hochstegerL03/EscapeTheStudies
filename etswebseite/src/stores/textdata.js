import { defineStore } from 'pinia';
import axios from 'axios';

export const useTextData = defineStore('textdata', {
  state: () => ({
    chapterStory: [],
    chapterLection: [],
  }),
  actions: {
    async getStory(title) {
      const { data } = await axios.get(
        `http://localhost:3000/escapethestudies/story?title=${title}`,
      );
      this.chapterStory = data;
    },
    async getLection(title) {
      const { data } = await axios.get(
        `http://localhost:3000/escapethestudies/lection?title=${title}`,
      );
      this.chapterLection = data;
    },
  },
  getters: {},
});
