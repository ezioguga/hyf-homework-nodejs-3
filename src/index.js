const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req,res) => res.send([]))


app.listen(3000,function() {
    console.log("server is running")
})
