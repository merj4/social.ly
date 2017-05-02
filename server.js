var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var db = require('./server/db')

var port = process.env.PORT || 8080
app.listen(port, () => {console.log('Listening on port ' + port)})
app.get('/', (req, res) => { res.sendFile(__dirname + '/public')})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

module.exports = {
  app: app,
}