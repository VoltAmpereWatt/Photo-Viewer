const router = require('express').Router();
let Users = require('../models/users.model');
let Images = require('../models/Images.model');
const AWS = require('aws-sdk');
// const multer = require('multer');
// const upload = multer({ storage: multer.memoryStorage() });
// require('dotenv').config();

const ID = process.env.AWSAccessKeyId;
const SECRET = process.env.AWSSecretKey;
const BUCKET_NAME = 'photo-viewer-gallery';

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

router.route('/upload/:username').post((req, res) => {
  console.log(req.params.username)
  Users.find({ username: req.params.username })
    .then(res => console.log(res._id))
})

router.route('/fetch/:username').get((req, res) => {
  console.log('In image fetch')
  Images.find({uploader:req.params.username})
  .then(result=>res.json(result))
  .catch(error=>console.log(error))
    // , (error,result)=>{
    // console.log(result)
    // res=res.json(result)
  // })
})

module.exports = router;