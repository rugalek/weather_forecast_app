// DOM //

let temperature = document.querySelector('.weather-temp');
let city = document.querySelector('.location')

//
let currentCity = 'Minsk';
async function getCityWeather(cityName){
try {
   let response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=6c61d6bfd185b4e080d6c9c1f1ab3746`);
   let dayForecast = await response.json()
}
catch {
    (e) => console.log(e)
}
};

console.log(getCityWeather(currentCity));
