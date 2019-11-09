const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'users';
const collectionName = 'user_info';

exports.registerUser = function(username, userpassword, useremail, userphone) {

  MongoClient.connect(mongoLink, (err, dataBaseName) =>
  {
    if(err) return console.log(err);

    console.log('connection established ', dataBaseName);
    var collection = dataBaseName.collection(collectionName);
    var doc = {'username':username,
                'userpassword':userpassword,
                'useremail':useremail,
                'userphone':userphone
              };
  });
  try {
    collection.insertOne(doc);
  } catch (e)
  {
    print(e);
  }
}
