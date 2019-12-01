  

function wakeDog(dogName, dogBreed) {
    let exercise = `wake ${dogName} the ${dogBreed}`;
    return exercise;
  }
 
function leashDog(dogName, dogBreed) {
    let exercise = `Leash ${dogName} the ${dogBreed}`;
    return exercise;
  }
 
function walkToPark(dogName, dogBreed) {
    let exercise = `Walk to the park with ${dogName} the ${dogBreed}`;
    return exercise;
  }

function throwFrisbee(dogName, dogBreed) {
    let exercise = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return exercise;
  }

function walkHome(dogName, dogBreed) {
    let exercise = `Walk home with ${dogName} the ${dogBreed}`;
    return exercise;
  }

function unleashDog(dogName, dogBreed) {
    let exercise = `Unleash ${dogName} the ${dogBreed}`
    return exercise;
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