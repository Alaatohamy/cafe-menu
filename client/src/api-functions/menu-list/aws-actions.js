import axios from "axios";

function encode(data) {
  var str = data.reduce(function(a, b) {
    return a + String.fromCharCode(b);
  }, "");
  return btoa(str).replace(/.{76}(?=.)/g, "$&\n");
}

export const getImgAWS = async imageObject => {
  try {
    const awsRes = await axios.post("/getImage", {
      imgName: imageObject.name
    });
    imageObject.src = "data:image/png;base64," + encode(awsRes.data.Body.data);
    return imageObject;
  } catch (err) {
    console.log(err);
  }
};

export const deleteImgAWS = async imageName => {
  const awsRes = await axios.post("/deleteImg", {
    imgName: imageName
  });
  return awsRes;
};

export const uploadImgAWS = async imageObject => {
  const imageData = new FormData();
  imageData.append("file", imageObject);
  const {
    data: { key }
  } = await axios.post("/uploadfile", imageData);
  return key;
};
