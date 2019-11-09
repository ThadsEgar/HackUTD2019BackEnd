const express = require('express');
const cors = require('cors');
const twilio = require('./twilioComponent.js');

const app = express();

app.use(cors());

app.get('/login', (req, res) => {
  console.log("testing");
  twilio.sendMessage();
  res.send('Login page');
});

app.post('/login', (req, res) => {
  // TODO: Login page
});

app.get('/home', (req,res) => {
  res.send('Home page')
});

app.listen(4000, () => {
  console.log('Listening on port 4000.');
});
