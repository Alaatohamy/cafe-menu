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
  return imageObject;
};

const deleteImgAWS = async imageName => {
  const awsRes = await axios.post("/deleteImg", {
    imgName: imageName
  });
  return awsRes;
};

const uploadImgAWS = async imageObject => {
  const imageData = new FormData();
  imageData.append("file", imageObject);
  const {
    data: { key }
  } = await axios.post("/uploadfile", imageData);
  return key;
};

var cacheId = {};
const getMemorizedItem = async id => {
  if (id in cacheId) {
    return cacheId[id];
  } else {
    const itemRef = await firestore.doc(`menu-items/${id}`);
    const itemSnapshot = await itemRef.get();
    const itemData = itemSnapshot.data();
    cacheId = { ...cacheId, [id]: itemData };
    return itemData;
  }
};

const createUniqImgKey = imageName => {
  const imageArray = imageName.split(".");
  imageName =
    imageArray[0] +
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9) +
    "." +
    imageArray[1];
  return imageName;
};

export const addNewItem = async newItem => {
  try {
    if (newItem.image.name) {
      var imgKey = await uploadImgAWS(newItem.image.file);
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
      var img = await getImgAWS(itemData.image);
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
  await getImgAWS(itemData.image);
  return itemData;
};

export const deleteItem = async id => {
  const itemRef = await firestore.doc(`menu-items/${id}`);
  const itemData = await getMemorizedItem(id);
  const awsRes = await deleteImgAWS(itemData.image.name);
  console.log({ awsRes });
  await itemRef.delete();
};

export const editItem = async (id, newData) => {
  const itemRef = await firestore.doc(`menu-items/${id}`);
  const oldItemData = await getMemorizedItem(id);
  if (newData.image.name !== oldItemData.image.name) {
    //[TODO] Delete old img and upload the new one
    await deleteImgAWS(oldItemData.image.name);
    var imgKey = await uploadImgAWS(newData.image.file);
    newData = { ...newData, image: { name: newData.image.name } };
  }
  await itemRef.update(newData);
};
