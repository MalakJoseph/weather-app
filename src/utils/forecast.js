const request = require("postman-request");

const forecast = (lat, lon, place, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d277d02b6396ab84f79ff7b86a268fda&query=${lat},${lon}&units=m`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      return callback("Unable to connect to weather service!", undefined);
    }
    if (body.error) {
      return callback("Unable to find location.", undefined);
    }
    callback(
      undefined,
      `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. And the humidity is ${body.current.humidity}%.`
    );
  });
};

module.exports = forecast;
