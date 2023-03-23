import { defineStore } from 'pinia';
import axios from 'axios';

export const useTextData = defineStore('textdata', {
  state: () => ({
    homeView: [],
  }),
  actions: {
    async textDataStore(id) {
      const { data } = await axios.get(`http://localhost:3000/escapethestudies/textdata/${id}`);
      this.homeView = data;
    },
  },
  getters: {},
});
