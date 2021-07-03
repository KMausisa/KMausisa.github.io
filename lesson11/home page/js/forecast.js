const cityid = '5604473';
const apiid = '0d648c9f2d64c1cd646caf6d06eb1492';

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${apiid}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    let day = 0;
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fiveDayForecast);

    // loop through each forecast day
    fiveDayForecast.forEach(x => {
        let d = new Date(x.dt_txt);
        let imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
        console.log(imagesrc);
        document.getElementById(`dayOfWeek${day+1}`).textContent = dayOfWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        day++;
    });
  });