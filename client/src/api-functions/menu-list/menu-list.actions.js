import axios from "axios";
import { firestore } from "firebase-config/utils";
import { uploadImgAWS, getImgAWS, deleteImgAWS } from "./aws-actions";
import { getMemorizedItem } from "./utils";

export const addNewItem = async newItem => {
  try {
    if (newItem.image.name) {
      var imgKey = await uploadImgAWS(newItem.image.file, axios);
    }
    const collectionRef = await firestore.collection("menu-items");
    const newItemRef = collectionRef.doc();
    await newItemRef.set({
      ...newItem,
      image: imgKey ? { name: imgKey } : { name: "" }
    });
  } catch (error) {
    console.log({ error });
  }
};

export const getAllItems = async () => {
  const collectionRef = await firestore.collection("menu-items");
  const collectionSnapshot = await collectionRef.get();
  const allItemsDoc = await collectionSnapshot.docs;
  if (allItemsDoc.length !== 0) {
  }
  const allItems = await Promise.all(
    allItemsDoc.map(async item => {
      const itemData = item.data();
      var img = await getImgAWS(itemData.image, axios);
      return {
        ...itemData,
        image: !!allItemsDoc.length ? img : itemData.image,
        key: item.id
      };
    })
  );
  return allItems;
};

export const getItemData = async id => {
  const itemData = await getMemorizedItem(id);
  await getImgAWS(itemData.image, axios);
  return itemData;
};

export const deleteItem = async id => {
  const itemRef = await firestore.doc(`menu-items/${id}`);
  const itemData = await getMemorizedItem(id);
  const awsRes = await deleteImgAWS(itemData.image.name, axios);
  console.log({ awsRes });
  await itemRef.delete();
};

export const editItem = async (id, newData) => {
  const itemRef = await firestore.doc(`menu-items/${id}`);
  const oldItemData = await getMemorizedItem(id);
  if (newData.image.name !== oldItemData.image.name) {
    await deleteImgAWS(oldItemData.image.name, axios);
    await uploadImgAWS(newData.image.file, axios);
    newData = { ...newData, image: { name: newData.image.name } };
  }
  await itemRef.update(newData);
};
