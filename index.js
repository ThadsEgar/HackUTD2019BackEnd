const express = require('express');
const cors = require('cors');
const twilioReq = require('./twilioComponent.js');
const register = require('./register.js');
const login = require('./login.js');
const app = express();

app.use(cors());

app.post('/sendMessage', (req, res) => {
  console.log(req.param('phoneNumber'));
  twilioReq.sendMessage(req.param('phoneNumber'));
  res.send('Login page');
});

app.post('/register', (req, res) => {
  register.registerUser(req.param('username'), req.param('userpassword'), req.param('useremail'), req.param('userphone'), req.param('userLocation'));
  res.send('Resgisteration complete.');
});

app.get('/login', (req, res) => {

  res.json(login.loginUser(req.param('username'), req.param('userpassword')));
  // res.send("temp text");
  // TODO: Login page
});

app.get('/home', (req,res) => {
  res.send('Home page')
});

app.listen(4000, () => {
  console.log('Listening on port 4000.');
});
