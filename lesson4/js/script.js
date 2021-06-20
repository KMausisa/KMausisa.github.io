// A function that gets the element with the class "primaryNav"
function toggleMenu() {
    document
        .getElementsByClassName("primaryNav")[0]
        .classList.toggle("responsive");
}

document.querySelector('#lastUpdate').textContent = `Last Updated: ${document.lastModified}`;

const date = new Date();

const year = date.getFullYear();

document.querySelector('#year').textContent = year;