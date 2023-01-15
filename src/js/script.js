const cityForm = document.querySelector('.cityForm');
const weatherCont = document.querySelector('.weatherContainer');

const updateWeather = async (city) => {

  const cityProps = await getCity(city);
  const weather = await getWeather(cityProps.Key);

  return {
    cityProps,
    weather
  }

}

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityForm.city.value;
  console.log(city);

  updateWeather(city)
    .then( data => console.log(data))
    .catch( err => console.log(err));

  weatherCont.classList.add('showWeather');
  cityForm.reset();
});