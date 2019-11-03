import { firestore } from "firebase-config/utils";

export const ITEM_INIT_STATE = {
  name: "",
  type: "",
  price: 0,
  image: { name: "", src: "", file: {} }
};

var cacheId = {};
export const getMemorizedItem = async id => {
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

export const createUniqImgKey = imageName => {
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
