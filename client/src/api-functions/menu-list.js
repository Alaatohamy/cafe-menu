import { firestore } from "firebase-config/utils";
import axios from "axios";

function encode(data) {
  var str = data.reduce(function(a, b) {
    return a + String.fromCharCode(b);
  }, "");
  return btoa(str).replace(/.{76}(?=.)/g, "$&\n");
}

const getImgAWS = async imageObject => {
  const awsRes = await axios.post("/getImage", {
    imgName: imageObject.name
  });
  imageObject.src = "data:image/png;base64," + encode(awsRes.data.Body.data);
  debugger;
  return imageObject;
};

var cacheId = {};
const getMemorizedItem = async id => {
  if (id in cacheId) {
    return cacheId[id];
  } else {
    const itemRef = await firestore.doc(`menu-items/${id}`);
    const itemSnapshot = await itemRef.get();
    const itemData = await itemSnapshot.data();
    cacheId = { ...cacheId, [id]: itemData };
    return itemData;
  }
};

export const addNewItem = async newItem => {
  try {
    const imageData = new FormData();
    imageData.append("file", newItem.image.file);
    const {
      data: { key }
    } = await axios.post("/uploadfile", imageData);
    const collectionRef = await firestore.collection("menu-items");
    const newItemRef = collectionRef.doc();
    await newItemRef.set({
      ...newItem,
      image: { name: key }
    });
  } catch (error) {
    console.log({ error });
  }
};

export const getAllItems = async () => {
  const collectionRef = await firestore.collection("menu-items");
  const collectionSnapshot = await collectionRef.get();
  //[TODO] add individual item.imageData inside map
  const img = await getImgAWS({ name: "pepsi.webp", src: "", file: {} });
  const allItems = await collectionSnapshot.docs.map(item => {
    const itemData = item.data();
    return {
      ...itemData,
      image: img,
      key: item.id
    };
  });
  return allItems;
};

export const getItemData = async id => {
  const itemData = await getMemorizedItem(id);
  await getImgAWS(itemData.image);
  return itemData;
};

export const deleteItem = async id => {
  const itemRef = await firestore.doc(`menu-items/${id}`);
  await itemRef.delete();
};

export const editItem = async (id, newData) => {
  const itemRef = await firestore.doc(`menu-items/${id}`);
  const oldItemData = await getMemorizedItem(id);
  if (newData.image.name !== oldItemData.image.name) {
    //[TODO] Delete old img and upload the new one
    newData = { ...newData, image: { name: newData.image.name } };
  }
  await itemRef.update(newData);
};
