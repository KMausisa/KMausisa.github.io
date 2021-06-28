const cityid = '5604473';
const apiid = '0d648c9f2d64c1cd646caf6d06eb1492';

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${apiid}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
  });