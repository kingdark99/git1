const express = require('express')

const app = express()
app.set('view engine', 'pug')
 

app.get('/',   (req, res) =>{
  res.send('Hello World')
})
app.get('/about', (req, res) => {
    res.render('about', {
      message: 'This is message sent from app.js',
    
    })
  })

  app.get('/index', (req, res) => {
    res.render('index', {
      message: 'This is message sent from app.js',
    
    })
  })
app.listen(3000)