import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB04MDO3UQB8k0FtyFV6y2xriurzRBCkhw",
  authDomain: "crw-db-dc7a0.firebaseapp.com",
  projectId: "crw-db-dc7a0",
  storageBucket: "crw-db-dc7a0.appspot.com",
  messagingSenderId: "701562668026",
  appId: "1:701562668026:web:cbd0975632228671f41a43",
  measurementId: "G-CZQYCSQGTV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
