const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=56300%20milicz&key=AIzaSyCSo65bZUM2aHihgNNIFpjlox8jpYi4E6g',
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(response,  undefined, 2));
  console.log(`Miejscowość: ${body.results[0].formatted_address}`);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});