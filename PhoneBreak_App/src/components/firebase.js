// connect to firebase db

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Phone Break app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "API_KEY_HERE",
    authDomain: "phonebreak-d30e3.firebaseapp.com",
    databaseURL: "https://phonebreak-d30e3-default-rtdb.firebaseio.com",
    projectId: "phonebreak-d30e3",
    storageBucket: "phonebreak-d30e3.appspot.com",
    messagingSenderId: "185510977256",
    appId: "1:185510977256:web:733e0683d5352736f4335d",
    measurementId: "G-99HDEXCTKX"
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
