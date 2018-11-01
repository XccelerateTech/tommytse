const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.post('/', (req, res) => {
    var arr = req.body.reduce((acc, ele)=>acc+ele);
    res.send(arr.toString());//need to string for res.send
    console.log(JSON.stringify(arr));
    console.log(arr.toString());
    console.log(req.body);
    console.log(arr);
})

app.listen(8080);