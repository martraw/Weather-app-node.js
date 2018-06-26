const request = require('request');


const geocodeAddress = (address) => {
  const encodedAddress = encodeURIComponent(address)

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCSo65bZUM2aHihgNNIFpjlox8jpYi4E6g`,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(response,  undefined, 2));
    if (error) {
      console.log(`Unable to connect to Google services`);
    } else if (body.status === 'ZERO_RESULTS') {
      console.log(`Addres is not valid address`);
    } else if (body.status === 'OK') {
      console.log(`Miejscowość: ${body.results[0].formatted_address}`);
      console.log(`Lat: ${body.results[0].geometry.location.lat}`);
      console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    }
  });
}

module.exports = {
  geocodeAddress
}