const request = require('request');
const safeLocationMongo = require('./safeLocationMongo.js');
var baseUrl = 'https://gis.fema.gov/arcgis/rest/services/NSS/FEMA_NSS/FeatureServer/5/query?where=1=1&outFields=LONGITUDE,LATITUDE,SHELTER_ID&geometry=-96.807%2C32.973%2C-96.697%2C32.999&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json';
// var baseLeft = 'https://gis.fema.gov/arcgis/rest/services/NSS/FEMA_NSS/FeatureServer/5/query?where=1%3D1&outFields=LONGITUDE,LATITUDE,SHELTER_ID&geometry=';
//query?where=1%3D1&outFields=*&outSR=4326&f=json';
//-+.013, -+.054
//var username = 'us';
//var latitude = '1';
//var longitude = '1';
exports.safePlacesForUser = function (username, latitude, longitude) {
  var smallLat = parseInt(latitude) - .40;
  var bigLat = parseInt(latitude) + .40;
  var smallLong = parseInt(longitude) - .6;
  var bigLong = parseInt(longitude) + .6;
  var baseLeft = 'https://gis.fema.gov/arcgis/rest/services/NSS/FEMA_NSS/FeatureServer/5/query?where=1=1&outFields=LONGITUDE,LATITUDE,SHELTER_ID&geometry=' + smallLong + ',' + smallLat + ',' + bigLong + ',' + bigLat + '&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json';
  // var baseLeft.concat(smallLat,'%2C',smallLong,'%2C',bigLat,'%2C',bigLong,'&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json');
  console.log(baseLeft);

  request(baseLeft, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    var bodyJSON = JSON.parse(body);
    if (bodyJSON.features[0]) {
      console.log(bodyJSON.features[0].attributes.SHELTER_ID);
      for (var i = 0; i < bodyJSON.features.length; i++) {
        var shelterID = bodyJSON.features[i].attributes.SHELTER_ID;
        var lat = bodyJSON.features[i].attributes.LATITUDE;
        var long = bodyJSON.features[i].attributes.LONGITUDE;
        console.log(shelterID);
        console.log(lat);
        console.log(long);
        safeLocationMongo.insertShelter(username, shelterID, lat, long);
      }
    }
  });
}