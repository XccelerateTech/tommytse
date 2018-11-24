const express = require('express');
const app = express();
const session = require('express-session');
const setupPassport = require('./passport');
const bodyParser = require('body-parser');
const router = require('./router')(express);

app.use(session({
    secret: 'supersecret'
}));
//allow us to get info from body elements of post request  so the text received from login form 
// will be properly received by express
app.use(bodyParser.urlencoded());

setupPassport(app);

app.use('/', router);

app.listen(3030);