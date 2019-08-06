const express = require('express');
const router = require('./routes/index');

const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// parse incoming requests data
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

app.listen(port, () => {
    console.log(`server running on ${port}`)
});