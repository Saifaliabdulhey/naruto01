import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtQiVSplWh0hynhho31EXu43XVqv-tN-Y",
    authDomain: "naruto-f1616.firebaseapp.com",
    projectId: "naruto-f1616",
    storageBucket: "naruto-f1616.appspot.com",
    messagingSenderId: "977411525187",
    appId: "1:977411525187:web:f5064b1a662c479b5ce2f6",
    measurementId: "G-CEP9J4X3W1"
  };


  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();


  export { firebase, database as default };