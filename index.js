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
const app = express();
const updateLocation = require('./updateLocation.js');

app.use(cors());
app.use(bodyParser.json())

app.post('/sendMessage', (req, res) => {
  console.log(req.param('phoneNumber'));
  twilioReq.sendMessage(req.param('phoneNumber'));
  res.send("message sent successfully");
});

app.post('/register', (req, res) => {
  register.registerUser(req.param('username'), req.param('userpassword'), req.param('useremail'), req.param('userphone'), req.param('userlatitude'), req.param('userlongitude'));
  res.send('Resgisteration complete.');
});

app.get('/login', (req, res) => {
  login.loginUser(req.param('username'), req.param('userpassword'), res);
  // res.json();
  // res.send("temp text");
  // TODO: Login page
});

app.post('/updateLocation', (req, res) => {
  updateLocation.updateLocationForUser(req.param('username'), req.param('userlatitude'),req.param('userlongitude'), res);

});

app.get('/home', (req, res) => {
  res.send('Home page')
});

cron.schedule("* * * * *", function() {
    console.log("running a task every minute");
    checkEmergency.checkEmergencyNear();
});

app.listen(4000, () => {
  console.log('Listening on port 4000.');
});
