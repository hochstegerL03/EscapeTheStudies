import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: [{ userid: 1, email: 'user*in@example.com', username: 'User*in' }],
  }),
  actions: {
    async getUser(email) {
      const { data } = await axios.get('http://localhost:3000/escapethestudies/user', {
        email: email,
      });
      this.user = data;
    },
  },
  getters: {},
});
