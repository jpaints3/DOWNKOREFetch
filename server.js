var express = require("express")
var logger = require("morgan")

var app = express()

app.get('/', function(request, response){
    response.render('index.html')
})

app.set('view engine', 'html')

app.use (express.static('views'))
app.set ('views', __dirname + '/views')
app.use(logger('dev'))

var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log (`App running`)
})
