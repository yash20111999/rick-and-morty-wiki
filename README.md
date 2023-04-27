# About Project 

### * React JS based website that displays information on Rick and Morty characters, episodes, and locations using open source APIs.
### * Implemented API calls with Axios, including filters and search functionality with debounce.
### * Developed reusable components with Styled Components, using an atomic code architecture approach.
### * Deployed website through AWS EC2 machine, demonstrating proficiency with deployment and server management. [Live Link](http://43.204.220.14:3000/)

![Preview](Preview ArwinAitest.png "Preview")

## To run the project on Local Port

In the project directory, run the following commands

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## To run the project on EC2 machine by AWS

### Create a account on AWS console
### Go to EC2 though side menu
### Click on Launch instance 
### Select Machine type (I choose Amazon Linux Free Tier)
### Configure Instance Type, Network Setting And Storage.
### Select the configured instance Click on Connect.
### Install latest node by following the [DOC](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)
### Clone git repository `git clone https://github.com/yash20111999/rick-and-morty-wiki.git`
### In the project repository run the following :
### `npm install`
### `npm install serve`
### `npm run build`
### `serve build 3000`

### This will successfully deploy your project on AWS server by using EC2 machine.

### Now you can copy the public ip address and add 3000 in the end to check the deployement working successfully.

# <p style="text-align: center;"> THANK YOU FOR YOUR VISIT</p>





