import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa1401fJg3MlyfBlfz7urZJFKweokgogI",
  authDomain: "twitter-clone-44d11.firebaseapp.com",
  projectId: "twitter-clone-44d11",
  storageBucket: "twitter-clone-44d11.appspot.com",
  messagingSenderId: "942287684924",
  appId: "1:942287684924:web:5ae8022181f31fbba10a39",
  measurementId: "G-JD6W984LRB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};