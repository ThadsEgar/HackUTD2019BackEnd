const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'safelocations_data';
const collectionName = 'safelocations_data_info';

exports.retrieveShelters = function (username, res) {
    console.log("calling function that calls connection");
    MongoClient.connect(mongoLink, (err, client) => {
        var arr = [];
        if (err) return console.log(err);
        const db = client.db(dataBaseName);
        db.collection(collectionName).findOne({_id : username}).then((result) => res.send(result.shelter));
    });
}
