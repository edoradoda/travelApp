var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require("cors");
const app = express()

var corsOptions = {
  origin: ['https://www.lightuniverso.com','http://localhost:8080','http://localhost:8081'],
  // origin:'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})



app.post('/testPost', function (req, res) {
    res.send({ok:'OK'});
})


module.exports = app;