const sodaSpringsCityIdForecast = '5607916';
const apiIdSodaForecast = '0d648c9f2d64c1cd646caf6d06eb1492';

const apiURLSodaForecast = `https://api.openweathermap.org/data/2.5/forecast?id=${sodaSpringsCityIdForecast}&appid=${apiIdSodaForecast}&units=imperial`;

fetch(apiURLSodaForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    let day = 0;
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fiveDayForecast);

    // loop through each forecast day
    fiveDayForecast.forEach(x => {
        let d = new Date(x.dt_txt);
        let imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
        document.getElementById(`dayOfWeek${day+1}`).textContent = dayOfWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp);
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        day++;
    });
  });