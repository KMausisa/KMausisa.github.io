const apiURL = 'api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=0d648c9f2d64c1cd646caf6d06eb1492'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });