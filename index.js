// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

//Spin SQLite DB
const db = require('./schema')


//set server to listen on port 3000
const port = 3000
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

//Default express settings
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))


//render homepage
app.get('/', (request, response) => {
  response.render('home', {
    name: 'Eli'
  })
})

//User sign up route
const users = []
app.post('/users', function (req, res) {
    // retrieve user posted data from the body
    const user = req.body
    users.push({
      name: user.name,
      age: user.age
    })
    res.send('successfully registered')
})
