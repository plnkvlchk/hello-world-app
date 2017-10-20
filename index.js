import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.listen(8080, function() {
    console.log('Hello, world!')
})

app.use('/', function(req, res) {
    res.send({"success": "ok"})
})
