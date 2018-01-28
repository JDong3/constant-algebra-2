var express = require('express')
var path = require('path')
var app = express()

app.use(express.static('dist'))
app.get('/', (req, res) => (
  res.send('hello world')
))

app.listen(3000, () => (
  console.log('starting local server on port 3000...')
))
