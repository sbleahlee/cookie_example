//DB 접속정보

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAiwWXdWtUDbLp2swQOj3hqdMCVIu36O1M",
    authDomain: "moiza-wr.firebaseapp.com",
    projectId: "moiza-wr",
    storageBucket: "moiza-wr.appspot.com",
    messagingSenderId: "470906013514",
    appId: "1:470906013514:web:16a592401a6de5247fe3b3",
    measurementId: "G-XX2M4DYCVJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  try {
      firebase.initializeApp(firebaseConfig);
  }catch(err){
      if(!/already exists/.test(err.message)){
          console.error('Firebase initialization error', err.stack)
      }
  }
  const fire = firebase;
  export default fire;