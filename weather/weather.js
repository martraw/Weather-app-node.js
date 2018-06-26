const request = require('request');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/ce4dbb0f620ff755371a00c4a9f46f09/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {

    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callback(`Unable to feth weather.`);
    };
  });
}

module.exports = {
  getWeather
}