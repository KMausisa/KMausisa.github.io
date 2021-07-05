const apiURLFishHaven = "https://api.openweathermap.org/data/2.5/weather?lat=42.0372&lon=-111.3960&units=imperial&appid=90899f2531f315e25562f0f4572b08c9";

fetch(apiURLFishHaven)
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
      document.getElementById('windSpeed').textContent = Math.round(windSpeed);
    
  });