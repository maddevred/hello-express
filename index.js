const express = require('express');
const app = express();

app.get('/', function(reg, res) {
    res.send('hello sei world');
});

app.listen(8000);
