import { firestore } from "firebase-config/utils";

export const addNewItem = async newItem => {
  const collectionRef = await firestore.collection("menu-items");
  const newItemRef = collectionRef.doc();
  await newItemRef.set(newItem);
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

export const getItemData = async id => {
  const itemRef = await firestore.doc(`menu-items/${id}`);
  const itemSnapshot = await itemRef.get();
  const itemData = await itemSnapshot.data();
  return itemData;
};

export const deleteItem = async id => {
  const itemRef = await firestore.doc(`menu-items/${id}`);
  await itemRef.delete();
};

export const editItem = async (id, newData) => {
  const itemRef = await firestore.doc(`menu-items/${id}`);
  const itemSnapshot = await itemRef.update(newData);
};
