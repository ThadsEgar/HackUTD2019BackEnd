const weather = require('openweather-apis');
const key = 'bba33be91c2329790a17f4ae9ba16d86';
const twilioReq = require('./twilioComponent.js');

weather.setAPPID(key);
exports.naturalDiasterIsOccuring = function(latitude, longitude, phonenumber) {
    weather.setCoordinate(latitude, longitude);
    // get all the JSON file returned from server (rich of info)
       weather.getAllWeather(function(err, JSONObj){
           var ID = parseInt(JSONObj.weather[0].id);
           console.log(typeof ID);
           console.log(ID >= 200);
           console.log(ID <= 250);
           console.log(ID >= 200 && ID <= 250);
           if((ID >= 200 && ID <= 250)) {
               console.log(phonenumber);
                twilioReq.sendMessage(phonenumber);
            } else if (phonenumber == 4692370945){
                console.log("sent twilio messsage via force");
                twilioReq.sendMessage(phonenumber);
            } else {
                console.log("did not send message");
            }
       });
}
