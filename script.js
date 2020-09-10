// Write your JavaScript code here!
window.addEventListener('load',()=>{
   let pilotName = document.querySelector('input[name=pilotName]');
   let coPilotName = document.querySelector('input[name=copilotName]')
   let fuelLevel = document.querySelector('input[name=fuelLevel]');
   let cargoMass = document.querySelector('input[name=cargoMass]');
   let theForm = document.querySelector('form');
   let pilotStatus = document.getElementById('pilotStatus');
   let faultyItems = document.getElementById('faultyItems');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let launchStatus = document.getElementById('launchStatus');
   let missionTarget = document.getElementById('missionTarget');
   let planetInfo = '';
   
   //Fetch JSON data
   fetch('https://handlers.education.launchcode.org/static/planets.json').then((response)=>{
     response.json().then((json)=>{
      let random = Math.floor(Math.random()*json.length);
        //console.log(json);
        planetInfo += `
        <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[random].name}</li>
            <li>Diameter: ${json[random].diameter}</li>
            <li>Star: ${json[random].star}</li>
            <li>Distance from Earth: ${json[random].distance}</li>
            <li>Number of Moons: ${json[random].moons}</li>
      </ol>
      <img src="${json[random].image}">
        `;

        missionTarget.innerHTML = planetInfo;
 });
   });

   //validation checks
   theForm.addEventListener('submit',(event)=>{
      if(pilotName.value === '' || coPilotName.value === ''){
         event.preventDefault();
         window.alert("The pilot and co-pilot fields need to be filled out!");
      }
      if(isNaN(fuelLevel.value)){
         event.preventDefault();
         window.alert('Fuel level needs to be filled out and needs to be a number!');
      }
      if(isNaN(cargoMass.value)){
         event.preventDefault();
         window.alert('Cargo Mass needs to be filled out and needs to be a number!');
      }

      //launchStatusCheckDiv
     if(cargoMass.value > 10000){
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML = `Cargo mass too high for launch!`;
         launchStatus.innerHTML = `Shuttle isn't ready for launch!`;
         launchStatus.style.color = 'red';
     }
     else{
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = `Cargo mass low enough for launch!`;
        launchStatus.innerHTML = `Shuttle is ready for launch!`;
        launchStatus.style.color = 'green';
      }
      pilotStatus.innerHTML = `Pilot ${pilotName.value} ready!`;
      copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} ready!`;
      if(fuelLevel.value < 10000){
         fuelStatus.innerHTML = `Fuel level too low for launch!`;
         launchStatus.innerHTML = `Shuttle isn't ready for launch!`;
         launchStatus.style.color = 'red';
      }
      else{
         fuelStatus.innerHTML=`Fuel level high enough for launch!`;
         launchStatus.innerHTML = `Shuttle is ready for launch!`;
         launchStatus.style.color = 'green';
   }
         
      event.preventDefault();
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
