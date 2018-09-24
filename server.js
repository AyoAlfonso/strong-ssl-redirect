var sslRedirect = require('./src/index');
var express = require('express');
var app = express();
require('dotenv').config();

app.use(sslRedirect({
    //www: true,
}));

app.get('/', function (req, res) {
    res.send('hello world');
});


app.set('port', (process.env.PORT || 4500));

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

// app.listen(process.env.PORT || 3000);