import '@babel/polyfill';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueAnalytics from 'vue-analytics';

import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
  },
});

Vue.use(VueAnalytics, {
  id: 'UA-126482543-1',
});

new Vue({
  render: h => h(App),
}).$mount('#app');
