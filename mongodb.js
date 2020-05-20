//CRUD operations 

const {MongoClient,  ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect:' + error)
    }
    const db = client.db(databaseName)
   
    // db.collection('users').findOne({
    //     _id: new ObjectID('5ec2ce991fd17e08a4c983dd')
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Error:' + error)
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 33}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, task) => {
    //     if(error){
    //         return console.log (error)
    //     }
    //     console.log(task)
    // })

    // db.collection('users').updateOne(
    //     {_id: new ObjectID('5ec2cbe89260934dd82a977e')}, 
    //     {$inc:{age: 1}}
    // ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany(
    //     {completed: false}, 
    //     {$set: {completed: true}}
    // ).then(result => console.log(result)).catch(error => console.log(error))

    db.collection('users').deleteOne(
        {age: 26}
    ).then(result => console.log(result)).catch(error => console.log(error))

    db.collection('tasks').deleteOne(
        {description: 'Task1'}
    ).then(result => console.log(result)).catch(error => console.log(error))

})