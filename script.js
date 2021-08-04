// TODO: add code here
window.addEventListener('load', function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let container = document.getElementById('container');

            let astronauts = json; // just assigning the json to a better variable name

            astronauts.sort(compare); //sorting by hours in space

            for(astronaut of astronauts){ // another way to iterate through an array

                let green = checkGreen(astronaut); // adding class green if astronaut.active is true

                // make sure to use +=. Using = will rewrite the container code 
                // each time through the iteration which will leave you with only
                // one astronaut displayed.
                container.innerHTML += `<div class="astronaut">
                <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li ${green}>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(', ')}</li>
                </ul>
                </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>`;
            }

            // adding the astronaut count at the bottom of the container
            container.innerHTML += `<p>Astronaut Count: ${astronauts.length}</p>`;
        });
    });
});

// function used to help sort by hours in space
function compare( a, b) {
    if(a.hoursInSpace < b.hoursInSpace) {
        return 1;
    } else if(a.hoursInSpace > b.hoursInSpace){
        return -1
    } else {
        return 0;
    }
}

// function used for bonus mission #2
function checkGreen(astronaut) {
    if(astronaut.active) {
        return "class = 'green'";
    } else {
        return "";
    }
}