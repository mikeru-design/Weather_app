class Forecast {
  constructor(){
    this.key = 'Zr5xykAV2S9A8XG48epMV8Hr1ZeE0E0w';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }

  async getWeather (locationKey) {

    const query = `${locationKey}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();

    return data[0];
  }

  async getCity (city) {

    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
  }

  async updateWeather (city) {

    const cityProps = await this.getCity(city);
    const weather = await this.getWeather(cityProps.Key);

    return {
      cityProps,
      weather
    };
  }
}

export default Forecast;