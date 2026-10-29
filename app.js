const express = require('express')
const app = express()

app.get('/about', (request, response) => {
  console.log('about')
  response.send('About page')
})

app.get('/', (request, response) => {
  console.log('HOme page')
  response.send('Home page')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

module.exports = app
