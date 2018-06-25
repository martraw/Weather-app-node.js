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

  const addressURI = encodeURIComponent(argv.address)
  console.log(addressURI);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURI}&key=AIzaSyCSo65bZUM2aHihgNNIFpjlox8jpYi4E6g`,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(response,  undefined, 2));
  console.log(`Miejscowość: ${body.results[0].formatted_address}`);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});