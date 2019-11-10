const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'users';
const collectionName = 'user_info';


exports.checkEmergencyNear = function() {
  console.log('in emergency');
  MongoClient.connect(mongoLink, (err, client) => {

    const db = client.db(dataBaseName);
    db.collection(collectionName).find({}, function(err, doc){
    doc.forEach(function(err,doc){
      console.log(doc);
    });
    });
  });
}
