const express = require('express');
const app = express();
app.use(express.static('./flowershop'))
app.listen(8080);