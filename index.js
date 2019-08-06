const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hellow World!!!');
});

app.get('/list', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/list/:id', (req, res) => {
    res.send(req.params.id);
});

app.listen(3000, () => console.log('Listening on port 3000 ...'));