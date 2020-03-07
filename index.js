require('dotenv').config()

const express = require('express')
const app = express()
const Datastore = require('nedb')
const database = new Datastore('database.db')
database.loadDatabase()

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})

app.use(express.static('public'))
app.use(express.json({limit: '10mb'}))

app.post('/messages', (req, res) => {
    database.insert(req.body)
    console.log(req.body)
    res.json(req.body)
})

app.get('/messages', (req, res) => {
    database.find({}, (err, data) => {
        if(err){
            console.log(err)
            res.end()
            return
        }

        res.json(data)
    })
})