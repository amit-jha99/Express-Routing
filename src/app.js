const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
});


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