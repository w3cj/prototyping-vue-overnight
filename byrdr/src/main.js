import '@babel/polyfill';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueFirestore from 'vue-firestore';

/* eslint-disable */
import firestore from './firestore';
/* eslint-enable */

import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
  },
});

Vue.use(VueFirestore);

new Vue({
  render: h => h(App),
}).$mount('#app');
