const express = require('express');
const cors = require('cors');
const twilioReq = require('./twilioComponent.js');

const app = express();


app.use(cors());


app.post('/sendMessage', (req, res) => {
  console.log(req.param('phoneNumber'));
  twilioReq.sendMessage(req.param('phoneNumber'));
  res.send('Login page');
});

app.post('/register', (req, res) => {
  res.send('Resgisteration complete.');
});

app.post('/login', (req, res) => {
  // TODO: Login page
});

app.get('/login', (req, res) => {
  res.send('Login page');
});

app.get('/home', (req,res) => {
  res.send('Home page')
});

app.listen(4000, () => {
  console.log('Listening on port 4000.');
});
