const { urlencoded } = require('body-parser')
const express = require('express')
const nunjucks = require('nunjucks')

const control = require('./controller/control')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))
server.use(urlencoded({
    limit: '50mb', 
    extended: true
}))

nunjucks.configure('views', {
    express: server,
    autoescape: true,
    noCache: true
})

server.get("/", control.index)

server.post("/", control.post)

server.listen(8080, function(){
    console.log("server is running")
})