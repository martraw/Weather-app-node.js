const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

const encodedAddress = encodeURIComponent(argv.address)

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCSo65bZUM2aHihgNNIFpjlox8jpYi4E6g`,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(response,  undefined, 2));
  if (error) {
    console.log(`Unable to connect to Google services`);
  } else if (body.status === 'ZERO_RESULTS') {
    console.log(`Addres ${argv.address} is not valid address`);
  } else if (body.status === 'OK') {
    console.log(`Miejscowość: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
  }
});