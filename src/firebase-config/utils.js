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

/**Use it for adding demo data by calling it once */
export const createCollectionAndDoc = async (collectionName, dataToAdd) => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  dataToAdd.forEach(element => {
    const newDoc = collectionRef.doc();
    batch.set(newDoc, element);
  });
  /** Fire batched request
   * @returns {promise}, void on success, error on fail
   */
  return await batch.commit();
};

export default firebase;
