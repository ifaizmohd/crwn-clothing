import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCKEcNTBoX9_JqrrXv3Ek5eTJwAE0UO2sA",
  authDomain: "crwn-db-96d5b.firebaseapp.com",
  projectId: "crwn-db-96d5b",
  storageBucket: "crwn-db-96d5b.appspot.com",
  messagingSenderId: "697371406180",
  appId: "1:697371406180:web:b7dd80e4863f7543839471",
  measurementId: "G-GSKSJG6Q2E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
