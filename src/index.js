const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//Users
app.post('/users', (req, res) => {
    const user = new User (req.body)
    user.save().then(r => res.status(201).send(r)).catch(e => res.status(400).send(e))
})

app.get('/users', (req, res) => {
    User.find({}).then(r => res.status(201).send(r)).catch(e => res.status(500).send())
})

app.get('/users/', (req, res) => {
    User.find({}).then(r => res.status(201).send(r)).catch(e => res.status(500).send())
})



//Tasks
app.post('/tasks', (req, res) => {
    const task = new Task (req.body)
    task.save().then(r => res.status(201).send(r)).catch(e => res.status(400).send(e))
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})