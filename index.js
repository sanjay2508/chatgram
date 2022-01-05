const express = require('express')

const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000

// just to test the server
app.get('/', (req, res) => {
  res.status(200).send('Working')
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})