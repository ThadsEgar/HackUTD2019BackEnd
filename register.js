const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'users';
const collectionName = 'user_info';

exports.registerUser = function (username, userpassword, useremail, userphone) {
  console.log("calling function that calls connection");

  MongoClient.connect(mongoLink, (err, dataBaseName) => {
    console.log("testing connection");
    if (err) return console.log(err);

    console.log('connection established ', dataBaseName);
    var userCollection = dataBaseName.collection(collectionName);
    var doc = {
      'username': username,
      'userpassword': userpassword,
      'useremail': useremail,
      'userphone': userphone
    };

    try {
      userCollection.insertOne(doc, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
      });
    } catch (e) {
      console.log(e);
      dataBaseName.close();

    }
  });
  console.log("run insert method");
}