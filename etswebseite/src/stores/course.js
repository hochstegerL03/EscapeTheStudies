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
    async getQuestion(id) {
      const question = await axios.get(`http://localhost:3000/escapethestudies/question/${id}`);
      this.question = question.data;
    },
    async getAnswers() {
      const answers = await axios.get('http://localhost:3000/escapethestudies/answers');
      this.answers = answers.data;
    },
  },
  getters: {},
});
