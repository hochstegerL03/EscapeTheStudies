import { defineStore } from 'pinia';
import axios from 'axios';

export const useCourseStore = defineStore('course', {
  state: () => ({
    course: [],
    chapters: [],
  }),
  actions: {
    async getCourse() {
      const { data } = await axios.get('http://localhost:3000/escapethestudies/courses');
      this.course = data;
    },
    async getChapters() {
      const { data } = await axios.get('http://localhost:3000/escapethestudies/chapter/2');
      this.chapters = data;
    },
  },
  getters: {},
});
