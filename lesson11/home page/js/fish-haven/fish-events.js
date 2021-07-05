const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// Fetch Method
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // Creating an array based on jsonObject
    const towndata = jsonObject['towns'];
    
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    for (let i = 0; i < towndata.length; i++) {
      if (towndata[i].name == "Fish Haven") {
        // Placing content in each element
        p1.textContent = towndata[i].events[0];
        p2.textContent = towndata[i].events[1];
        p3.textContent = towndata[i].events[2];
        p4.textContent = towndata[i].events[3];


        // Appending card element to div.cards
        document.querySelector('section.events').appendChild(p1);
        document.querySelector('section.events').appendChild(p2);
        document.querySelector('section.events').appendChild(p3);
        document.querySelector('section.events').appendChild(p4);
      }
    }
  });
