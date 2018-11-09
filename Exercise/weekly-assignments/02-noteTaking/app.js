/*
Create a HTTP Server using express. (express) OK
Write the notes to a json file in your server application (Express)
Write test case for your express route handler (jasmine,supertest)
Your application should have basic authentication procedure using HTTP Basic Authentication. OK
Your application should be able to handle multiple users using the authorization information the users input. (Authentication) OK
Create a dashboard page that loads all the notes of the current user. (Handlebars)N
Create a RESTful API to allow user to Create/Update/Delete/Retrieve Data (Restful API)
Access your Restful API using Axios/JQuery (JQuery)
Manipulate your dashboard dom using JQuery (JQuery)
The UI should be mobile responsive (Boostrap)
*/
//initialize the application
const fs = require("fs");
const path = require("path");
const NoteService = require("./NodeService");
const NoteRouter = require("./NoteRouter");
const app = require("./utils/init-app")();
let noteService = new NoteService(path.join(__dirname, test.json));
//set up the router for note service for the above file
app.use("/api/notes", new NoteRouter(noteService).router());
app.listen(3000, err => {
  console.log("I am running on port 3000");
});
