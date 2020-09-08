// Write your JavaScript code here!
window.addEventListener('load',()=>{
   let pilotName = document.querySelector('input[name=pilotName]');
   let coPilotName = document.querySelector('input[name=copilotName]')
   let fuelLevel = document.querySelector('input[name=fuelLevel]');
   let cargoMass = document.querySelector('input[name=cargoMass]');
   let theForm = document.querySelector('form');

   let levelFuel = Number(fuelLevel);
   //console.log(levelFuel.value);

   theForm.addEventListener('submit',(event)=>{
      if(pilotName.value === '' || coPilotName.value === ''){
         event.preventDefault();
         window.alert("You need to fill out the fields");
      }
      if(isNaN(fuelLevel.value)){
         event.preventDefault();
         window.alert('Fuel level needs to be filled out and needs to be a number!');
      }
      if(isNaN(cargoMass.value)){
         event.preventDefault();
         window.alert('Cargo Mass needs to be filled out and needs to be a number!');
      }
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
