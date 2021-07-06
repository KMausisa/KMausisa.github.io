const apiURLFishHaven2 = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0372&lon=-111.3960&units=imperial&appid=90899f2531f315e25562f0f4572b08c9";

fetch(apiURLFishHaven2)
  .then((response) => response.json())
  .then((jsObject) => {
    let day = 0;
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));

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