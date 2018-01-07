const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('TodoApp');
    if (err) {
        console.log('Unbale to connect to the database');
        return;
    }
    db.collection('Todos').find().count().then(count => {
        console.log(count);
    }, err => {
        console.log(err);
    });
});