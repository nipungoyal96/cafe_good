import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import firebase from 'firebase/app';

var init=firebase.initializeApp({
  apiKey: "AIzaSyB-W7mhsGzy1k9V02TzKJyyCaNk2WYoNok",
  authDomain: "travel-dafb3.firebaseapp.com",
  databaseURL: "https://travel-dafb3.firebaseio.com",
  projectId: "travel-dafb3",
  storageBucket: "travel-dafb3.appspot.com",
  messagingSenderId: "1056922030060",
  appId: "1:1056922030060:web:eae8a90cd341d96f10bac9",
  measurementId: "G-357E0D0X3Z"
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,init
}).$mount('#app')
