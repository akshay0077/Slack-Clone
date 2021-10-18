import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFnHmOPVKz92KTctHT54mDbOf-i0f1OkA",
  authDomain: "slack-clone-eaed5.firebaseapp.com",
  projectId: "slack-clone-eaed5",
  storageBucket: "slack-clone-eaed5.appspot.com",
  messagingSenderId: "85884400115",
  appId: "1:85884400115:web:095cb7dc8ff5a21abf6286",
  measurementId: "G-SG2SGQL2ES"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }