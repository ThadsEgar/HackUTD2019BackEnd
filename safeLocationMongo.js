const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'safelocations_data';
const collectionName = 'safelocations_data_info';


exports.insertShelter = function (username, shelterId, shelterlatitude, shelterlongitude) {
    console.log("calling function that calls connection");

    MongoClient.connect(mongoLink, (err, client) => {
        console.log("testing connection");
        if (err) return console.log(err);
        const db = client.db(dataBaseName);

        console.log('connection established ', dataBaseName);
        var shelterCollection = db.collection(collectionName);
        try {
            shelterCollection.updateOne({
                _id: username
            }, {
                $addToSet: {
                    "shelter": {
                        'shelterId': shelterId,
                        'shelterlatitude': shelterlatitude,
                        'shelterlongitude': shelterlongitude
                    }
                }
            }, {
                upsert: true
            });
            client.close();
        } catch (e) {
            console.log(e);
        }
    });
    console.log("run insert method");
}