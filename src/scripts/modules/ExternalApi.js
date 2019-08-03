class ExternalAPI {
  async getWeather(lat, lon) {
    const api_url = `api/weather/${lat}-${lon}`;
    const response = await fetch(api_url);

    if (response.status !== 200) {
      throw new Error('Cannot fetch the data!');
    } else {
      const data = await response.json();
      return data;
    }
  }

  async getCityPosition(city) {
    const api_url = `api/location/${city}`;
    const response = await fetch(api_url);

    if (response.status !== 200) {
      throw new Error('Cannot fetch the data!');
    } else {
      const data = await response.json();
      return data;
    }
  }
}

export default ExternalAPI;
