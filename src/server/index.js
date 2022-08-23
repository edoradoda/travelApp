var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require("cors");
const app = require("./app");



// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8081, function () {
    console.log('Example app listening on port 8081!')
})












