const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'users';
const collectionName = 'user_info';
const weatherValidator = require('./weatherValidator.js');

exports.updateUsersSafetyLocation = function() {
  console.log('in safety location');
  MongoClient.connect(mongoLink, (err, client) => {
    if (err) return console.log(err);
    const db = client.db(dataBaseName);
    db.collection(collectionName).find().forEach(function(doc){
      var latitude = doc.userlatitude;
      var longitude = doc.userlongitude;

      weatherValidator.naturalDiasterIsOccuring(latitude, longitude, phonenumber);
      client.close();
    });
  });
}
