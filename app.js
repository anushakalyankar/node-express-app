const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.post('/', function (req, res) {
  console.log('POST request')
  res.send('Welcome home!')
})

app.use(function (req, res, next) {
  console.log('logged')
  next()
})

app.get('/hello', (req, res) => {
  console.log('GET request')
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  console.log('GET request')
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  console.log('GET request')
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  console.log('GET request')
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

