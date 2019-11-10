const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'users';
const collectionName = 'user_info';
const weatherValidator = require('./weatherValidator.js');
const twilioReq = require('./twilioComponent.js');



exports.checkEmergencyNear = function() {
  console.log('in emergency');
  MongoClient.connect(mongoLink, (err, client) => {
    if (err) return console.log(err);
    const db = client.db(dataBaseName);
    db.collection(collectionName).find().forEach(function(doc){
      var latitude = doc.latitude;
      var longitude = doc.longitude;
      if(!weatherValidator.withinSafeVicinity(latitude, longitude)) {
        console.log(doc.username)
      } 
    });
  });
}
