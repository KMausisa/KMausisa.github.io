// A function that gets the element with the class "primaryNav"
const button = document.querySelector('.menu');
const mainnav = document.querySelector('#primaryNav');

button.addEventListener('click', () => 
{mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) 
mainnav.classList.remove('responsive')};

const date = new Date();

document.querySelector('#lastUpdate').textContent = date.toDateString();

const year = date.getFullYear();

document.querySelector('#year').textContent = year;