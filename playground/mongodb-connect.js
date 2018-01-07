const {MongoClient, ObjectID} = require('mongodb');

const insertDocument = (db, callback) => {
    const collection = db.collection('Todos');
    collection.insertOne({
        text: 'something to do',
        completed: 'false' 
    }, (err, result) => {
        if (err) {
            console.log('unable to insert', err);
            return;
        }
        console.log(result.ops[0]._id.getTimestamp());
        callback(result);
    });
};

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('TodoApp');
    if (err) {
        console.log('Unbale to connect to the database');
        return;
    }
    console.log('Connected....');
    insertDocument(db, (result) => {
        client.close();
    });
});