// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEtEyHV-lgC7rkD94WF-12GrjqEjyZp9w",
  authDomain: "cofe-menu-db.firebaseapp.com",
  databaseURL: "https://cofe-menu-db.firebaseio.com",
  projectId: "cofe-menu-db",
  storageBucket: "cofe-menu-db.appspot.com",
  messagingSenderId: "51000281555",
  appId: "1:51000281555:web:d8b61f7ce6ea69bdec8726",
  measurementId: "G-7NJV092NHR"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
