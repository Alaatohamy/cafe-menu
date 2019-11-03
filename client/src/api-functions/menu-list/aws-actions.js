export function encode(data) {
  var str = data.reduce(function(a, b) {
    return a + String.fromCharCode(b);
  }, "");
  return btoa(str).replace(/.{76}(?=.)/g, "$&\n");
}

export const getImgAWS = async (imageObject, httpRequestHandler) => {
  try {
    const awsRes = await httpRequestHandler.post("/getImage", {
      imgName: imageObject.name
    });
    imageObject.src = "data:image/png;base64," + encode(awsRes.data.Body.data);
    return imageObject;
  } catch (err) {
    console.log(err);
  }
};

export const deleteImgAWS = async (imageName, httpRequestHandler) => {
  const awsRes = await httpRequestHandler.post("/deleteImg", {
    imgName: imageName
  });
  return awsRes;
};

export const uploadImgAWS = async (imageObject, httpRequestHandler) => {
  const imageData = new FormData();
  imageData.append("file", imageObject);
  const {
    data: { key }
  } = await httpRequestHandler.post("/uploadfile", imageData);
  return key;
};
