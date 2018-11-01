const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.post('/', (req, res) => {
    var arr = req.body.reduce((acc, ele)=>acc+ele);
    res.send(arr.toString());
    console.log(JSON.stringify(arr));
    console.log(arr.toString());
})

app.listen(8080);