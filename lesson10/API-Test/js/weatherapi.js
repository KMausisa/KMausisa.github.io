const cityid = '5604473';
const apiid = '0d648c9f2d64c1cd646caf6d06eb1492';

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0d648c9f2d64c1cd646caf6d06eb1492&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    console.log(imagesrc);
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });