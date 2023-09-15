# Get Youtube Subscribers API

<br/>
👋 Hey There,

this repository houses my code for the Get Youtube Subscribers API. This app was made as part of my Almabetter course, for my Backend Capstone Project. 

This API project has 3 endpoints ```/subscribers```, ```/subscribers/names``` and ```/subscribers/:id```.  Here the response is in JSON format and being a Backend Project there is no Frontend to this and was not a part of the acceptance criteria as well.  The code here is entirely javascript.

<br/>

## Content 📚
- About it's Working
-  Getting Started
- Languages/Database Used
- Relevant Links

<br/>

### About it's Working
----

**API calls**

Below are endpoints/pathnames you can call on ```localhost``` or on the deployed link. All of these are GET requests.

- **```/subscribers```** : This is the first endpoint. After making this call the server responds with a array of objects of subscribers with all their details.
- **```/subscribers/names```** : This is the second endpoint. After making this request the server responds with an array of objects containing only the names of subscribers and subscribedChannel as their fields.
- **```/subscribers/:id```** : This is the last endpoint. You provide an id here in place of *:id*. There are two cases here: 
	- if the id matches it returns one object matching the id field with all the details of the subscriber.
	- if the id does not match it returns a error message and a status code of **400**.

**Testing and Deployment**

Also, this API is deployed on Render.com and the testing and validation is done with the help of POSTMAN. API schema documentation has also been made with POSTMAN.

![68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656e6465722d253436453342372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d72656e646572266c6f676f436f6c6f723d7768697465](https://github.com/shaswattejankar/youtubesubscribers/assets/72884373/93df4cee-e36b-4b29-91a4-638659690f14) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) 

<br/>

### Getting Started
----
**Locally**

Type ```git clone <paste the url for this repository>``` in your cmd and use it for yourself.

To start using the API on your software like POSTMAN or running on browser follow theses steps : 
- in the ```.\src``` run ```npm install mongoose express nodemon``` command.
- Navigate to the appropriate path with cd and run the command ```node .\createDatabase.js``` to create the database.
- Navigate to the appropriate path with cd and then run the command ```nodemon 
.\index.js``` and wait for the messages *connected to MongoDb Atlas successfully* and *server is running on Port 3000* to appear and you are all set to use this API locally.

**Forking**

You can also clone this repository or submit a pull request here. To submit a pull request you can follow the steps given below:
- Copy or fork the remote repository.
-  Download or clone your copy of the repository to your local filesystem. 
- Navigate to your copy of the repository and click the green "Clone or download" button. Click the clipboard next to the https clone URL to copy it.
- At the command prompt enter the following 
```
		git clone <the pasted URL>
```
-  Create an new branch to work your edits, and switch to that branch, change to your new repository and type 
```
		git checkout -b <newbranchname>
```
- Make your change, commit it (adding a clear and concise commit message) and push it to your local copy of the repository on GitHub. You will need to set the origin for your new branch the first time you push it up, so use the following code:

```
		git push -u origin <newbranchname>
```
- Navigate to the original GitHub repository, and you should see a big green button marked "Compare and pull request".
- Click that button and you will be taken to a page giving you to describe your pull request and show you the changes you have made. Write a clear and concise subject and description for your change asking for a merge.

> **Note:** You need to have installed **Node Js** installed on your device to run this code.

<br/>

### Languages/Database Used
-----

Following are used to create the website


- ![Javascript-323330_style=for-the-badge logo=javascript logoColor=F7DF1E](https://github.com/shaswattejankar/flashcardgenerator/assets/72884373/7ab325c5-aa9c-410a-96ed-df250a786e64)
- ![68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465](https://github.com/shaswattejankar/youtubesubscribers/assets/72884373/562cd33b-193b-4754-98c1-3a1806d855f0)
- ![MongoDB-4EA94B_style=for-the-badge logo=mongodb logoColor=white](https://github.com/shaswattejankar/youtubesubscribers/assets/72884373/703f3070-58e8-46f9-b773-eb969250c1da)

<br/>

### Relevant Links
---

1. Deployed with Render: https://get-youtube-subscribers-bp-st.onrender.com/ 
2. Link for locally cloning: https://github.com/shaswattejankar/youtubesubscribers.git
3. API schema documentation: https://documenter.getpostman.com/view/29625170/2s9YC4VYRw
