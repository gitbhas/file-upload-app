import React, { useState } from 'react';
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

function Appupload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const params = {
      Bucket: 'react-fileupload',
     // Key: 'folderName/' + selectedFile.name,
      Key: 'file.pdf',
      Body: selectedFile,
      ACL: 'public-read',
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Upload error:', err);
      } else {
        console.log('Upload successful:', data);
        // Reset selected file after successful upload
        setSelectedFile(null);
      }
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
  );
}

export default Appupload;
