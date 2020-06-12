const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibWFsYWtqb3NlcGgiLCJhIjoiY2pqMGU2bHprMGZoMTNrcDFrdzAwOXVoayJ9.z3zAEpyCWWsDfvw-aOpiYQ&limit=1`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      return callback("Unable to connect to location services!", undefined);
    }
    if (body.features.length === 0) {
      return callback(
        "Unable to find location, try again with different search term.",
        undefined
      );
    }
    callback(undefined, {
      longitude: body.features[0].center[0],
      latitude: body.features[0].center[1],
      location: body.features[0].place_name,
    });
  });
};

module.exports = geocode;
