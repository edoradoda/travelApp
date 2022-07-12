var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
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
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    console.log(`Your API key is ${process.env.API_KEY}`);
    res.send(mockAPIResponse)
})


app.post('/testPost', function (req, res) {
    res.send({ok:'OK'});
})


// app.post('/meaning', getMeaning)

app.post('/meaning', function (req, res) {
  console.log("data",req.body)
  let rs= getMeaning(req)
  rs.then(response =>  res.send(response))
 
})


async function getMeaning(req) {
   const txt = req.body.txt
   const lang = req.body.lang
  try {
    const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=${txt}&lang=${lang}`);
    // const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=en&lang=en`);
    // console.log(response.data);
    return response.data
    // res.send({req:req.body})
  } catch (error) {
    console.error(error);
    return error
  }
}

// async function getMeaning(req, res) {
//   const txt = req.body.txt
//   const lang = req.body.lang
//  try {
//    const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=${txt}&lang=${lang}`);
//    // const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=en&lang=en`);
//    // console.log(response.data);
//    res.send(response.data)
//    // res.send({req:req.body})
//  } catch (error) {
//    console.error(error);
//    res.send({result:'error'})
//  }
// }







