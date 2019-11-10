const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'users';
const collectionName = 'user_info';


exports.registerUser = function (username, userpassword, useremail, userphone, userlatitude, userlongitude) {
  console.log("calling function that calls connection");

  MongoClient.connect(mongoLink, (err, client) => {
    console.log("testing connection");
    if (err) return console.log(err);
    const db = client.db(dataBaseName);

    console.log('connection established ', dataBaseName);
    var userCollection = db.collection(collectionName);
    var doc = {
      _id: username,
      'username': username,
      'userpassword': userpassword,
      'useremail': useremail,
      'userphone': userphone,
      'userlatitude': userlatitude,
      'userlongitude' : userlongitude, 
    };

    try {
      userCollection.insertOne(doc, function (err, res) {
        console.log("1 document inserted");
        client.close();
      });
    } catch (e) {
      console.log(e);
    }
  });
  console.log("run insert method");
}
