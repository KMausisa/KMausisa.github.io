document.querySelector('#lastUpdate').textContent = `Last Updated: ${document.lastModified}`;

const date = new Date();

const year = date.getFullYear();

document.querySelector('#year').textContent = year;

WebFont.load({
    google: {
        families: [
            'Pattaya'
        ]
    }
})