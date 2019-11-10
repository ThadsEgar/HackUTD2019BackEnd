const weather = require('openweather-apis');

exports.withinSafeVicinity = function(latitude, longitude) {
    weather.setCoordinate(latitude, longitude);
    
}