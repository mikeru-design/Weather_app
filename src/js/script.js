import Forecast from './weather.js';
const cityForm = document.querySelector('.cityForm');
const weatherContainer = document.querySelector('.weatherContainer');
const weatherInfo = document.querySelector('.weatherInfoText');
const imgDayNight = document.querySelector('.imgDay-Night');
const icon = document.querySelector('.icon');
const forecast = new Forecast();

const updateUI = (data) => {

  weatherInfo.innerHTML = `
    <p class="city">${data.cityProps.EnglishName}</p>
    <p class="conditions">${data.weather.WeatherText}</p>
    <p class="degrees">${data.weather.Temperature.Metric.Value} &deg;C</p>
  `;

  imgDayNight.innerHTML = data.weather.IsDayTime ? `<img src="/images/day.svg" alt="day">` : `<img src="/images/night.svg" alt="night">`;

  icon.innerHTML = `<img src="/images/icons/${data.weather.WeatherIcon}.svg" alt="weather icon">`;
};

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityForm.city.value;
  console.log(city);

  forecast.updateWeather(city)
    .then( data => { console.log(data); updateUI(data);})
    .catch( err => console.log(err));

  if( !weatherContainer.classList.contains('showWeather') ){
    weatherContainer.classList.add('showWeather');
  }

  localStorage.setItem('city', city);

  cityForm.reset();
});

if( localStorage.getItem('city') ){
  forecast.updateWeather(localStorage.getItem('city'))
    .then( data => { console.log(data); updateUI(data);})
    .catch( err => console.log(err));

  if( !weatherContainer.classList.contains('showWeather') ){
    weatherContainer.classList.add('showWeather');
  }
}