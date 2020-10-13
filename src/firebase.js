import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAhnNeu3V8C3z-71sdno2cTrecM90wwMkA",
    authDomain: "react-slack-app-cfe8d.firebaseapp.com",
    databaseURL: "https://react-slack-app-cfe8d.firebaseio.com",
    projectId: "react-slack-app-cfe8d",
    storageBucket: "react-slack-app-cfe8d.appspot.com",
    messagingSenderId: "87480142508",
    appId: "1:87480142508:web:d741a82284253b8f6dad09",
    measurementId: "G-HLXDC8RLQ9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase