const weather = require('openweather-apis');

exports.withinSafeVicinity = function(latitude, longitude) {
    weather.setCoordinate(latitude, longitude);
        // get a simple JSON Object with temperature, humidity, pressure and description
        // weather.getSmartJSON(function(smart){
        //     console.log(smart);
        // });
}