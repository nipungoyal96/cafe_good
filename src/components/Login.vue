<template>
<div class="a">
    <div> Please Login To write Reviews </div>
    <div id="firebaseui-auth-container"></div>
</div>
</template>
<script>

import * as firebaseui from 'firebaseui';
import firebase from 'firebase/app';
import 'firebase/auth';



export default {
  name: 'login',
  components: {

  },
  mounted(){
   

   
      var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
         
         
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '/',
        // Privacy policy url/callback.
       
      };

      
  

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
  }
}

</script>

<style>
  div.a{
    padding:20%;
    text-align: center;
  }
</style>

