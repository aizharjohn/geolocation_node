const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'mapquest',
  //provider: process.env.GEOCODER_PROVIDER,

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'Vdgv13f1lTnnPVeBiD4hniqi5xtb1MrL', // process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
  //apiKey: process.env.GEOCODER_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
