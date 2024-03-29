import Vue from 'vue';
import App from './App.vue';
import store from "@/store";
import router from './router/router';
import vuetify from './plugins/vuetify';
import axios from "@/plugins/axios-instance";
import FlashMessage from '@smartweb/vue-flash-message';
// import '@/assets/sass/app.scss';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(FlashMessage);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
