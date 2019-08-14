const express = require('express')
const moongose = require('mongoose')
const http = require('http')
const userRouter = require('./routes/userRouter')

moongose.connect(
    'mongodb://localhost:27017/actosoft-test',
    { useNewUrlParser: true, useFindAndModify: false }
)
    .then((connection) => {
        console.log(`Connected to Mongo Database "${connection.connections[0].name}"`)
    })
    .catch((error) => {
        console.error('Error connecting to Mongo Database')
        console.error(error)
    })


const app = express()
app.use('/users', userRouter)
const server = http.createServer(app)

server.listen(5000, () => {
    console.log('App running en el port 5000')
})
