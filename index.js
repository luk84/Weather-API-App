const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening at 3000'));
app.use(express.static('dist'));

app.get('/api/weather/:lat-:lon', async (req, res) => {
  const { lat, lon } = req.params;

  const weather_apiKey = process.env.weather_apiKey;
  const weather_url = `https://api.darksky.net/forecast/${weather_apiKey}/${lat},${lon}`;
  const response = await fetch(weather_url);
  if (response.status !== 200) {
    res.sendStatus(response.status);
  } else {
    const data = await response.json();
    res.json(data);
  }
});

app.get('/api/location/:city', async (req, res) => {
  const city = req.params.city;
  const encodedCity = encodeURI(city);
  console.log(encodedCity);

  const location_apiKey = process.env.geocoder_apiKey;
  const location_url = `https://api.opencagedata.com/geocode/v1/json?q=${encodedCity}&key=${location_apiKey}`;
  const response = await fetch(location_url);
  if (response.status !== 200) {
    res.sendStatus(response.status);
  } else {
    const data = await response.json();
    res.json(data);
  }
});
