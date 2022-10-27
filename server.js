const express = require("express")

var server = express()
var port=5000
server.use(express.json())

require("./db/connection")

server.listen(port,() => {
    console.log(`server is running on : ${port}`)
    })
    