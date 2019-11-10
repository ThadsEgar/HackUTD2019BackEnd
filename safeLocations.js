const okhttp = require('okhttp');

var Request = okhttp.Request;
var RequestBody = okhttp.requestBody;
var RequestBuilder = okhttp.RequestBuilder;
var MultiPartBuilder = okhttp.MultiPartBuilder;
var baseUrl = 'https://gis.fema.gov/arcgis/rest/services/NSS/FEMA_NSS/FeatureServer/5/query?where=1%3D1&outFields=LONGITUDE,LATITUDE,SHELTER_ID&geometry=-96.807%2C32.973%2C-96.697%2C32.999&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json';
//query?where=1%3D1&outFields=*&outSR=4326&f=json';
//-+.013, -+.054
function onComplete(msg) {
  console.log(msg.url);
}

function onError(err) {
  console.log('error okhttp');
}

exports.safePlacesForUser = function(latitude, longitude) {
  new RequestBuilder().url(baseUrl).buildAndExecute().then(onComplete).catch(onError);
}
