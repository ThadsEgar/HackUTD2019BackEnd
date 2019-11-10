const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'users';
const collectionName = 'user_info';

exports.updateLocationForUser = function (username, userLatitude, userLongitude, res) {
  console.log("calling function that calls connection");

  MongoClient.connect(mongoLink, (err, client) => {
    console.log("testing connection");
    if (err) return console.log(err);
    const db = client.db(dataBaseName);

    console.log('connection established ', dataBaseName);
    var userCollection = db.collection(collectionName);
    userCollection.updateOne({
        _id : username
    }, {
        $set :
        {
            "latitude" : userLatitude,
            "longitude" : userLongitude
        }
    }).then((result) => {
            res.send(result);
        }
    );
  });
}
