import Vue from 'vue';
import VueFirestore from 'vue-firestore';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCJqCTI0DRKlixVW0zonR-xrcmQdzumazU',
  authDomain: 'byrdr-app.firebaseapp.com',
  databaseURL: 'https://byrdr-app.firebaseio.com',
  projectId: 'byrdr-app',
  storageBucket: 'byrdr-app.appspot.com',
  messagingSenderId: '901727727272',
});

const firestore = firebaseApp.firestore();

Vue.use(VueFirestore);

firestore.settings({
  timestampsInSnapshots: true,
});

export default firestore;
