var express = require('express')
var app = express()

app.use(express.static('../dist'))
app.get('/', (req, res) => (
  res.send('/index.html')
))

app.listen(3000)
