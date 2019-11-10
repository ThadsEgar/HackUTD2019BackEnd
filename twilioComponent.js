var accountSid = 'ACd542a53b7825a866dacbf4c1ea0b16cc'; // Your Account SID from www.twilio.com/console
var authToken = 'ac791a45751bf01ee020aae9f22e31be';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

const sendingNumber = '+12075187824';


console.log("initialize twilio");
exports.sendMessage = function(phoneNumber) {
    console.log("testing sent message");

    client.messages.create({
        body: 'There is an emergency event occuring, go to the nearest safe location.',
        to: phoneNumber,  // Text this number
        from: sendingNumber // From a valid Twilio number
    })
    .then((message) => console.log(message.sid), (reason) => console.log(reason)); 
    
};
