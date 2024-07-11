# AWS Project: REST API for Authentication

This project utilizes AWS services to implement a RESTful API for user authentication.

## Overview

This repository contains the code for a RESTful API built on AWS services:
- **Lambda Functions**: Backend logic is executed using serverless Lambda functions.
- **API Gateway**: Provides scalable API endpoints to access Lambda functions securely.
- **S3**: Hosts the frontend as a static website, serving HTML, CSS, and JavaScript files.
- **DynamoDB**: Stores user data securely in a NoSQL database for scalability and performance.

AWS_PROJECT_RESTAPI/
│
├── lambda_functions/
│   ├── authentication_lambda/
│   │   ├── index.js
│   │   └── package.json
│   │
│   └── data_handling_lambda/
│       ├── index.js
│       └── package.json
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── README.md


![Lambda]()

## Links
- Live Frontend: [vansh-login-frontend](http://vansh-login-frontend.s3-website.ap-south-1.amazonaws.com/)