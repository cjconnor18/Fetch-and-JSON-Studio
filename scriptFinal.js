// TODO: add code here
window.addEventListener('load', function() {
    let astronauts = [];
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            astronauts = json;
            let container = document.getElementById("container");
            astronauts = astronauts.sort(compare);

            for(let i = 0; i < astronauts.length; i++) {

                 
                greenClass = checkGreen(astronauts[i]);
                
                container.innerHTML += `<div class="astronaut">
                <div class="bio">
                   <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
                   <ul>
                      <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
                      <li ${greenClass}>Active: ${astronauts[i].active}</li>
                      <li>Skills: ${astronauts[i].skills.join(", ")}</li>
                   </ul>
                </div>
                <img class="avatar" src="${astronauts[i].picture}">
             </div>`;
            }
            container.innerHTML += `<p>Astronaut Count : ${astronauts.length}</p>`
        });
    });

    function checkGreen(astronaut) {
        if(astronaut.active) {
            return "class = 'green'";
        } else {
            return "";
        } 
    }

    function compare( a, b) {
        if(a.hoursInSpace < b.hoursInSpace) {
            return -1;
        } else if(a.hoursInSpace > b.hoursInSpace){
            return 1
        } else {
            return 0;
        }
    }


});