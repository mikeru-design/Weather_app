const apiKey = 'Zr5xykAV2S9A8XG48epMV8Hr1ZeE0E0w';

const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base+query);
  const data = await response.json();

  return data[0];
};

const getWeather = async (locationKey) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${locationKey}?apikey=${apiKey}`;

  const response = await fetch(base+query);
  const data = await response.json();

  return data[0];
};

export { getCity, getWeather };