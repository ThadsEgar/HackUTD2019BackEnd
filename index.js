const express = require('express');
const cors = require('cors');
const fs = require('fs');
const cron = require("node-cron");
const twilioReq = require('./twilioComponent.js');
const register = require('./register.js');
const bodyParser = require('body-parser')
const login = require('./login.js');
const weatherValidator = require('./weatherValidator.js');
const checkEmergency = require('./checkEmergency.js');
const safeLocations = require('./safeLocations.js');
const safeLocationsIterator = require('./safeLocationsIterator.js');
const app = express();
const updateLocation = require('./updateLocation.js');
const safeLocationsMongo = require('./safeLocationMongo.js');

app.use(cors());
app.use(bodyParser.json())

app.post('/sendMessage', (req, res) => {
  //console.log(req.param('phoneNumber'));
  //twilioReq.sendMessage(req.param('phoneNumber'));
  res.send("message sent successfully");
});

app.post('/register', (req, res) => {
  register.registerUser(req.param('username'), req.param('userpassword'), req.param('useremail'), req.param('userphone'), req.param('userlatitude'), req.param('userlongitude'));
  res.send('Resgisteration complete.');
});

app.post('/shelterInsert', (req , res) => {
  safeLocationsMongo.insertShelter(req.param('username'), req.param('shelterId'), req.param('shelterlatitude'), req.param('shelterlongitude'));
  res.send("Finished");
})

app.get('/login', (req, res) => {
  login.loginUser(req.param('username'), req.param('userpassword'), res);
});

app.post('/updateLocation', (req, res) => {
  updateLocation.updateLocationForUser(req.param('username'), req.param('userLatitude'),req.param('userLongitude'), res);
});

app.get('/home', (req, res) => {
  res.send('Home page')
});

app.get('/shelters', (req, res) => {
  res.send('Home page')
});

cron.schedule("* * * * *", function() {
    console.log("running a task every minute updating to check if there is emergency situation");
    checkEmergency.checkEmergencyNear();
});

cron.schedule("* * * * *", function() {
  console.log("running a task every minute for updating closest safe");
  safeLocationsIterator.safeLocationsIterateThroughAll();
  // updateSafe.updateUsersSafetyLocation();
});

app.listen(4000, () => {
  console.log('Listening on port 4000.');
});
