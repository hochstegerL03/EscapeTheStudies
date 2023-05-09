import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import { createPinia } from 'pinia';
import vue3GoogleLogin from 'vue3-google-login';

import App from './App.vue';
import router from './router';

import './assets/main.css';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

const app = createApp(App);
const pinia = createPinia();

app.use(Quasar, {
  plugins: {
    Notify,
  },
  config: {
    notify: {
      /* look at QuasarConfOptions from the API card */
    },
  },
});
app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId: '381874584720-p14r1psu4un55rs6sslceif7f6pi3idj.apps.googleusercontent.com',
});

app.mount('#app');
