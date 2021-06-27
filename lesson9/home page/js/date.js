const date = new Date();
const days = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];

const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

const dayName = days[date.getDay()];
const monthName = months[date.getMonth()];

document.querySelector('#year').textContent = `${dayName}, ${date.getDay()} ${monthName} ${date.getFullYear()}`;