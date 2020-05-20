const mongoose = require('mongoose')
const validator = require('validator')
// const User = require('../models/user')
 const Task = require('../models/task')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true, 
    useCreateIndex: true
})


    const task = new Task({completed: true})
    task.save().then(r => console.log(r)).catch(e => console.log(e))