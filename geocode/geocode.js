const request = require('request');


const geocodeAddress = (address, callback) => {

  const encodedAddress = encodeURIComponent(address)

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCSo65bZUM2aHihgNNIFpjlox8jpYi4E6g`,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(response,  undefined, 2));
    if (error) {
      callback(`Unable to connect to Google services`);
    } else if (body.status === 'ZERO_RESULTS') {
      callback(`Addres is not valid address`);
    } else if (body.status === 'OK') {

      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports = {
  geocodeAddress
}