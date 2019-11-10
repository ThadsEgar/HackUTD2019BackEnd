const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'users';
const collectionName = 'user_info';

exports.loginUser = function (username, userpassword) {
  
    MongoClient.connect(mongoLink, (err, client) => {
      console.log("testing connection");
      if (err) return console.log(err);
      const db = client.db(dataBaseName);
  
      console.log('connection established ', dataBaseName);
      var userCollection = db.collection(collectionName);
      userCollection.findOne({
          "username" : { 
            $in: [username]
          },
          "userpassword" : {
              $in : [userpassword]
          }
      }).then(
          result => {
              console.log(result);
            return result;
          }
      )
    console.log("run login method");
  });
}