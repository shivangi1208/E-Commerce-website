// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCLTs7C-kSEYrJn3PPRjmhSb4z8hQmU1gg",
  authDomain: "dbms-b220b.firebaseapp.com",
  projectId: "dbms-b220b",
  storageBucket: "dbms-b220b.appspot.com",
  messagingSenderId: "865468113094",
  appId: "1:865468113094:web:31b6bd465b1962783fb7c7",
  measurementId: "G-CXH33FRZ7Z"
};

const db = firebase.initializeApp(firebaseConfig).firestore();
const auth = firebase.auth();

export { db, auth };