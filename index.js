
'use strict';

////////////////////////////////////////////////////////////////////////////////
// Prompt user for height input and validate.
// If the input is invalid: communicate the problem and ask again.
let numLevelsAnswer;
let numLevels;
while (true) {
  numLevelsAnswer = prompt("How many levels should the pyramid have?");

  // Check if they typed *something*.
  if (numLevelsAnswer === "") {
    console.log("Please type a number.");
    continue;
  }

  // Cast it to a number.
  numLevels = Number(numLevelsAnswer);

  // Check if numLevels is an actual number.
  if (Number.isNaN(numLevels)) {
    console.log("Please type a number.");
    continue;
  }

  // Check if it's 1 or greater.
  if (numLevels < 1) {
    console.log("The minimum number of levels for the pyramid is 1.");
    continue;
  }

  // Check if it's 15 or smaller.
  if (numLevels > 15) {
    console.log("The maximum number of levels for the pyramid is 15.");
    console.log("Don't try to build too close to the sun.");
    continue;
  }

  // If we're here that means numLevels is a number between 0 and 16
  // so let's break out of the loop.
  break;
}


////////////////////////////////////////////////////////////////////////////////
// Decide which building material to use
const matchStick = "|";
const legoBrick = "=";
const stoneBrick = "#";

let material;
if (numLevels < 5) {
  material = matchStick;
} else if (numLevels < 10) {
  material = legoBrick;
} else {
  material = stoneBrick;
}

//Build the pyramid


const baseWidth = numLevels + (numLevels - 1);

for (let levelToBuild = 1; levelToBuild <= numLevels; levelToBuild++) {

  // the middle 
  let middle = `${material} `.repeat(levelToBuild);  

  // slice
  middle = middle.slice(0, -1);
  
  // spaces 
  const numSpacesOutside = (baseWidth - (middle.length)) / 2;
  const spaceOutside = " ".repeat(numSpacesOutside);
  
  // Print 
  console.log(`${spaceOutside}${middle}${spaceOutside}`);
}