const okhttp = require('okhttp');

var Request = okhttp.Request;
var RequestBody = okhttp.requestBody;
var RequestBuilder = okhttp.RequestBuilder;
var MultiPartBuilder = okhttp.MultiPartBuilder;

var request = 'https://gis.fema.gov/arcgis/rest/services/NSS/FEMA_NSS/FeatureServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json';

function onComplete(msg) {
  console.log(msg);
}

function onError(err) {
  console.log('error okhttp');
}
//new RequestBuilder().GET('http://google.com').buildAndExecute().then(onComplete).catch(onError);
new RequestBuilder().GET(request).buildAndExecute().then(onComplete).catch(onError);

//calculateSafeLocations = function(latitude, longitude) {

//}
