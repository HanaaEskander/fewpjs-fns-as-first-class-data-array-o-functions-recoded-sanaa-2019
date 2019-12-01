//My code goes here
  

function wakeDog(dogName, dogBreed) {
   
    console.log(`Wake ${dogName} the ${dogBreed}`);
   
  }
wakeDog("Xerox","Border Collie");

function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
  }
leashDog("Boo Radley","Pibble");  

function walkToPark(dogName, dogBreed) {
   console.log(`Wake to park with ${dogName} the ${dogBreed}`);
  }
walkToPark("Bunny","Labrador");
function throwFrisbee(dogName, dogBreed) {
   console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  }
throwFrisbee("Mary J. Blige","Papillon");
function walkHome(dogName, dogBreed) {
   console.log(`Wake home with ${dogName} the ${dogBreed}`);
  }
  walkHome("Santa","")

function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  }
const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
];

function exerciseDog(dogName, dogBreed){
    const dogs = [];
    for(let i = 0; i < routine.length; i++){
        dogs.push(routine[i](dogName,dogBreed));
    }
    return dogs;
}

