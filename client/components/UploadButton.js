import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { Icon } from "semantic-ui-react";
import Button from 'components/Button'

// import entire SDK
var AWS = require('aws-sdk');
const imageURL = "https://treehacksdrip.s3.amazonaws.com/’";
var albumBucketName = "treehacksdrip";
var bucketRegion = 'us-east-1';
var IdentityPoolId = 'us-east-1:e7ba7d5b-e247-43f9-b6d8-0bcfb3fdc4ad';

export default function UploadButton() {
    const [invalid, setInvalid] = useState(false);

    AWS.config.update({
        region: bucketRegion,
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: IdentityPoolId
        })
    });
    
    var s3 = new AWS.S3({
        apiVersion: "2006-03-01",
        params: { Bucket: albumBucketName }
    });
    
    const uploadImage = (albumName) => {
        var files = document.getElementById("photoupload").files;
        if (!files.length) {
            return alert("Please choose a file to upload first.");
        }
        var file = files[0];
        var fileName = file.name;
        var albumPhotosKey = encodeURIComponent(albumName) + "/";
        var image_key = str(uuidv4()) + ".";
        
        var photoKey = albumPhotosKey + image_key + fileName;
        
        // Use S3 ManagedUpload class as it supports multipart uploads
        var upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: albumBucketName,
                Key: photoKey,
                Body: file
            }
        });
    
        var promise = upload.promise();
    
        promise.then(
            function(data) {
                alert("Successfully uploaded photo.");
                
                // Post to API
            },
            function(err) {
                return alert("There was an error uploading your photo: ", err.message);
            }
        );
    }

    return (
        <div>
          <Button
            as="label"
            icon
            labelPosition="left"
            htmlFor="project-form-image-input"
            onClick={uploadImage}
          >
            <Icon name="upload" />
            Choose File
          </Button>
          <input
            id="photoupload"
            className="hidden-file-input"
            name="image"
            style={{ border: "none" }}
            accept="image/*"
            type="file"
          />
        </div>
    )
}