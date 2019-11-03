const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRETE_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION
});

const app = express();
const s3 = new aws.S3();
const port = process.env.PORT || 5000;
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log("Server is running on port " + port);
});

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    key: function(req, file, cb) {
      console.log(file);
      cb(null, file.originalname); //use Date.now() for unique file keys
    }
  })
});

//use by upload form
app.post("/uploadfile", upload.single("file"), function(req, res, next) {
  res.send(req.file);
});

const singleImgParams = imageName => ({
  Bucket: process.env.AWS_BUCKET_NAME,
  Key: imageName
});

app.post("/getImage", function(req, res) {
  s3.getObject(singleImgParams(req.body.imgName), function(err, data) {
    if (err || res.data === 500) res.send(500, err, err.stack);
    else res.send(200, data);
  });
});

app.post("/deleteImg", function(req, res) {
  s3.deleteObject(singleImgParams(req.body.imgName), function(err, data) {
    if (err || res.data === 500) res.send(500, err, err.stack);
    else res.send(200, data);
  });
});
