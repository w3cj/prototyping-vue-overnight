import '@babel/polyfill';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
