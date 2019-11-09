const MongoClient = require('mongodb').MongoClient;
const mongoLink = 'mongodb+srv://abhi:hacker@cluster0-loqpl.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dataBaseName = 'users';

MongoClient.connect(mongoLink, (err, dataBaseName) =>
{
  if(err) return console.log(err);
  console.log('connection established ', dataBaseName);
});
