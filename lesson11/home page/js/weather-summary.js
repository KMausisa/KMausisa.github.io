const cityid2 = '5604473';
const apiid2 = '0d648c9f2d64c1cd646caf6d06eb1492';

const apiURL2 = `https://api.openweathermap.org/data/2.5/weather?id=${cityid2}&appid=${apiid2}&units=imperial`;

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    // Display current weather
    document.getElementById('currentTemp').textContent = jsObject.weather[0].description;

    // Display High Temperature
    document.getElementById('highTemp').textContent = Math.round(jsObject.main.temp_max);

    // calculate Wind Chill
    const avgTemp = jsObject.main.temp;
    const windSpeed = jsObject.wind.speed;
    if (avgTemp > 50 && windSpeed < 3.0) {
      let windChill = Math.round(35.74 + (0.6215 * avgTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * avgTemp * Math.pow(windSpeed, 0.16)));
      // Display Wind Chill
      document.getElementById('windChill').textContent = windChill;
    } else {
      document.getElementById
      document.getElementById('windChill').textContent = 'N/A'
    } 

      // Display humidity
      document.getElementById('humidity').textContent = jsObject.main.humidity;

      // Display wind speed
      document.getElementById('windSpeed').textContent = windSpeed;
      
      
      // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
      // document.getElementById('icon').setAttribute('alt', desc);
    
  });