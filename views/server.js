const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';

var express = require("express")
var logger = require("morgan")
var bodyParser = require("body-parser")

var app = express()

app.get('/', function(request, response){
    response.render('index.ejs')
})

app.set('view engine', 'ejs')

app.use (express.static('views'))
app.set ('views', __dirname)
app.use(logger('dev'))

var port = process.env.PORT || 3000

app.listen(port, function(){
    console.log (`App running on http://${hostname}:${port}/`)
})

//use npm init
//use npm install --save express ejs morgan body-parser
//may need to use npm install firebase-admin

