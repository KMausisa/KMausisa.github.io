// A function that gets the element with the class "primaryNav"
const button = document.querySelector('.menu');
const mainnav = document.querySelector('#primaryNav');

button.addEventListener('click', () => 
{mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) 
mainnav.classList.remove('responsive')};

document.querySelector('#lastUpdate').textContent = `Last Updated: ${document.lastModified}`;

const date = new Date();

const year = date.toDateString();

document.querySelector('#year').textContent = year;