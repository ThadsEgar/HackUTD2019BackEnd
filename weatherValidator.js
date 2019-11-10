const weather = require('openweather-apis');
const key = 'bba33be91c2329790a17f4ae9ba16d86';
weather.setAPPID(key);
exports.withinSafeVicinity = function(latitude, longitude) {
    weather.setCoordinate(latitude, longitude);
    // get all the JSON file returned from server (rich of info)
       weather.getAllWeather(function(err, JSONObj){
           var ID = parseInt(JSONObj.weather[0].id);
           console.log(typeof ID);
           console.log(ID >= 200);
           console.log(ID <= 250);
           console.log(ID >= 200 && ID <= 250);
           if(ID >= 200 && ID <= 250) {
             return false;}
           else {return true;}
       });
}
