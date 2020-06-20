const AWS = require('aws-sdk');
const fs = require('fs');

require('dotenv').config();

const ID = process.env.AWSAccessKeyId;
const SECRET = process.env.AWSSecretKey;

console.log(ID)
console.log(SECRET)
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
})

console.log('waifor')

function uploadFile(fileName) {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: 'photo-viewer-gallery',
        Key: fileName.split("/")[fileName.split("/").length-1],
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function (err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
