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
//   app.get(/a/, (req, res) => {
//     res.send('/a/')
//   })



//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

  app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  })


//   To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

  app.get('/users/:userId/books/:bookId', (req, res) => {
      res.send(req.params)
    console.log(req.params);
  })


//   More than one callback function can handle a route (make sure you specify the next object). For example:
//   app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from B!')
//   })


//   An array of callback functions can handle a route. For example:
//   const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   const cb2 = function (req, res) {
//     res.send('Hello from C!')
//   }
  
//   app.get('/example/c', [cb0, cb1, cb2])

//   A combination of independent functions and arrays of functions can handle a route. For example:

  const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  app.get('/example/d', [cb0, cb1], (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from D!')
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