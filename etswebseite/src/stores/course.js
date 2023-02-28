import { defineStore } from 'pinia';
import axios from 'axios';

export const useCourseStore = defineStore('course', {
  state: () => ({
    course: [],
    question: [],
    answers: [],
  }),
  actions: {
    async getCourse() {
      const { data } = await axios.get('http://localhost:3000/escapethestudies/courses');
      this.course = data;
    },
    async getQAndA() {
      const question = await axios.get('http://localhost:3000/escapethestudies/question');
      this.question = question.data;
      const answers = await axios.get('http://localhost:3000/escapethestudies/answer');
      this.answers = answers.data;
    },
  },
  getters: {},
});
