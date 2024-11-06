**#30-days-of-amplify(file-upload-app)**

Below are the commands been used in the project for creating this app

1. npm install -g @aws-amplify/cli

   "This command been used to install the AWS Amplify CLI globally on your system using npm (Node Package Manager)."

   ![image](https://github.com/user-attachments/assets/86204bb1-3ea7-4f0e-a7af-f88a24880bd4)

2. amplify configure

   "This command been used to set up the AWS credentials and configuration necessary to interact with AWS services via the AWS Amplify CLI"

   ![image](https://github.com/user-attachments/assets/84790f73-7669-4dfa-9cb6-0e8a3eec73f2)

3. Need to add the policy for new test-user been created

   ![image](https://github.com/user-attachments/assets/a7acf9d8-2fd3-45ac-904a-6e22b61a16d0)

4. npx create-react-app file-upload-app

   "This command been used to create a new React project called file-upload-app using the create-react-app tool"

   ![image](https://github.com/user-attachments/assets/520e031d-cd10-44f6-9353-0f79b67bf1a5)

5. amplify init

   "This command is a key part of the AWS Amplify workflow. It initializes a new Amplify project in your local environment, setting up the necessary configuration and files to interact with AWS service"

   ![image](https://github.com/user-attachments/assets/ce567d26-c2d5-4dc8-ba12-fd0f0cff0f45)

6. Navigate to AWS Amplify in console and check the app been created

   ![image](https://github.com/user-attachments/assets/891a83cf-ea8e-4b74-8995-a4ece730f012)

7. amplify add auth

   "This command is used to add authentication to your AWS Amplify project. This typically involves setting up authentication mechanisms like sign-up, sign-in, and password recovery using Amazon Cognito"

   ![image](https://github.com/user-attachments/assets/5c713273-d6df-4ce4-85e8-00ca6c3d7605)

8. amplify push

   "This command is used to deploy the changes you’ve made to your AWS Amplify project to the cloud. It pushes your local configuration and backend resources (such as authentication, API, storage, etc.) to AWS"

   ![image](https://github.com/user-attachments/assets/a0fca212-8514-4b7d-b3ec-0f9ac7f2b335)

9. Navigate to Amazon Cognito in console and check the user pool been created as below

    ![image](https://github.com/user-attachments/assets/0845f771-edb9-47fe-b2bb-f2835d557357)

10. npm install aws-amplify @aws-amplify/ui-react

    "This command used to install two important packages for integrating AWS Amplify into a React project"
    - The aws-amplify package is the core library that helps you interact with various AWS services (such as Amazon Cognito, API Gateway, S3, and more) directly from your frontend application
    - The @aws-amplify/ui-react package provides UI components for building authentication flows (sign-up, sign-in, password recovery) and managing user sessions in a React application

11. npm start

   "This command used to run the start script defined in your project's package.json file. In the context of a JavaScript-based project (such as a React, Angular, or Node.js app), running npm start usually initiates the development server and launches your application in a local environment"

   ![image](https://github.com/user-attachments/assets/e38c0022-4994-4409-8f22-f17310b45841)

**Configurations at S3 Bucket:**

a. Create the S3 bucket with ACL enabled as below

![image](https://github.com/user-attachments/assets/dc2e2de3-b248-4b9f-9224-c29e197af210)

b. In permissions tab, edit the bucket policy and add the below one for access permissions for a specific S3 bucket and its contents

 ```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicListGet",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::react-file upload",
                "arn:aws:s3:::react-file upload/*"
            ]
        }
    ]
}
```
c. Edit the CORS policy and add the below one to specify which origins (domains) are allowed to make requests to your S3 bucket, what methods are allowed, which headers can be used, and how long the results of a preflight request can be cached.

```
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "DELETE",
            "GET",
            "HEAD"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "x-and-server-side-encryption",
            "x-amz-request-id",
            "x-am-id-2"
        ],
        "MaxAgeSeconds": 3000
    }
]
```
If you want to publish in cloud, following commands
- amplify push
- amplify add hosting
- amplify publish
