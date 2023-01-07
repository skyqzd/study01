const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const fs =require('fs');

app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname,'../form.html'))
  res.sendFile(path.resolve('math.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})