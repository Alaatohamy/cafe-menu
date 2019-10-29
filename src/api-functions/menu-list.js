import { firestore } from "firebase-config/utils";

export const addNewItem = async newItem => {
  const collectionRef = await firestore.collection("menu-items");
  const newDoc = collectionRef.doc();
  await newDoc.set(newItem);
};

export const getAllItems = async () => {
  const collectionRef = await firestore.collection("menu-items");
  const collectionSnapshot = await collectionRef.get();
  const allItems = await collectionSnapshot.docs.map(item => ({
    key: item.id,
    ...item.data()
  }));
  return allItems;
};
