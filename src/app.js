const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
});


// respond with "hello world" when a GET request is made to the homepage 
// This route path will match acd and abcd here b is optional
app.get('/ab?cd', (req, res) => {
    res.send('b is optional here')
  });
  
//   This route path will match abcd, abbcd, abbbcd, and so on.
  app.get('/ab+cd', (req, res) => {
    res.send('Here b can occur multiple times');
  })

//   This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

  app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })


//   This route path will match anything with an “a” in it.
  app.get(/a/, (req, res) => {
    res.send('/a/')
  })



//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

  app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  })
// respond with "hello world" when a POST request is made to the homepage
app.post('/user', (req, res) => {
    res.send('user created!!')
  })

  // respond with "hello world" when a PUT request is made to the homepage
app.put('/user', (req, res) => {
    res.send('user updated!!')
  })
  


   // respond with "hello world" when a DELETE request is made to the homepage
app.delete('/user', (req, res) => {
    res.send('user deleted!!')
  })
  

app.listen(3000,()=>{
   console.log("Server is listening at port 3000")
})