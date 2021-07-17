// Load the AWS SDK for Node.js
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')

// Configure region
AWS.config.update({ region: 'us-east-2' })

// Make a bucket
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

// Create bucket parameters
var bucketParams = {
    Bucket: "user-images-" + uuidv4()
}

// Call s3 to create bucket
s3.createBucket(bucketParams, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Success, bucket created');
    }
})