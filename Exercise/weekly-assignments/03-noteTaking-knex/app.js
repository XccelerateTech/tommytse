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
const app = require("./utils/init-app")();//initialize the app

//let noteService = new NoteService(path.join(__dirname, 'notes.json')); NOT USED IN WEEK3 AS WE ARE NOW READING & WRITING TO DB, NOT JSON FILE.
let noteService = new NoteService(knex);
//set up the router for note service for the above file
app.use("/api/notes", new NoteRouter(noteService).router());//rounters for http requests
app.get('/', (req,res)=>{
  noteService.list(req.auth.user).then(function(notes){//lists the note for the user and get the notes for rendering in handlebars
  res.render('index', {//define which file from the views folder to render: index.handlebars
      user: req.auth.user,//refer to {{user}}
      notes: notes//refer to {{notes}} and this only show the notes for this user

  });
});
})
//we dont set view router because there is only one route for view
app.listen(3000, err => {//run the server
  console.log("I am running on port 3000");
});
