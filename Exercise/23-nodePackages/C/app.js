const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());//?????????why 
app.post('/test', (req, res)=> {
    console.log(req.body);
    res.send(req.body);
});
app.listen(8080);
