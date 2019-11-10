const weather = require('openweather-apis');
const key = 'bba33be91c2329790a17f4ae9ba16d86';
weather.setAPPID(key);
exports.withinSafeVicinity = function(latitude, longitude) {
    weather.setCoordinate(latitude, longitude);
    // get all the JSON file returned from server (rich of info)
       weather.getAllWeather(function(err, JSONObj){
           var ID = JSONObj.weather[0].id;
           if(ID >= 200 && ID <= 250) {return false;}
           else {return true;}
       });
}
