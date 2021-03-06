const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// Fetch Method
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // Creating an array based on jsonObject
    const towndata = jsonObject['towns'];
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < towndata.length; i++) {
        // Creating different elements
        let card = document.createElement('section');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');
        
        if (towndata[i].name == "Soda Springs") {
            // Placing content in each element
            h2.textContent = towndata[i].name;
            h3.textContent = towndata[i].motto;
            p1.textContent = 'Year Founded: ' + towndata[i].yearFounded;
            p2.textContent = 'Population: ' + towndata[i].currentPopulation;
            image.setAttribute('src', `images/${towndata[i].photo}`);

            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(p1);
            div.appendChild(p2);
            card.append(div);
            card.appendChild(image);

            // Appending card element to div.cards
            document.querySelector('section.cards').appendChild(card);

        } else if (towndata[i].name == "Fish Haven") {
             // Placing content in each element
             h2.textContent = towndata[i].name;
             h3.textContent = towndata[i].motto;
             p1.textContent = 'Year Founded: ' + towndata[i].yearFounded;
             p2.textContent = 'Population: ' + towndata[i].currentPopulation;
             image.setAttribute('src', `images/${towndata[i].photo}`);

             div.appendChild(h2);
             div.appendChild(h3);
             div.appendChild(p1);
             div.appendChild(p2);
             card.append(div);
             card.appendChild(image);

             // Appending card element to div.cards
             document.querySelector('section.cards').appendChild(card);

        } else if (towndata[i].name == "Preston") {
             // Placing content in each element
             h2.textContent = towndata[i].name;
             h3.textContent = towndata[i].motto;
             p1.textContent = 'Year Founded: ' + towndata[i].yearFounded;
             p2.textContent = 'Population: ' + towndata[i].currentPopulation;
             image.setAttribute('src', `images/${towndata[i].photo}`);

             div.appendChild(h2);
             div.appendChild(h3);
             div.appendChild(p1);
             div.appendChild(p2);
             card.append(div);
             card.appendChild(image);

             // Appending card element to div.cards
             document.querySelector('section.cards').appendChild(card);
        }
    }
  });
