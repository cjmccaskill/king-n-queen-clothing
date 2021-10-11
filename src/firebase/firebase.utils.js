import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC6Oc4JbMBhH4Q4KpWrwfP6o2e-gJBv58A",
  authDomain: "king-n-queen-db.firebaseapp.com",
  projectId: "king-n-queen-db",
  storageBucket: "king-n-queen-db.appspot.com",
  messagingSenderId: "828501399018",
  appId: "1:828501399018:web:0ec1809c3921d40fe14e93",
  measurementId: "G-76PPEF3XGM",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
