"use strict";

// GLOBAL VARS

let totalFactors = 1;
//needed to count number of factors and determine when we find the highest factor.
// MASTER FUNCTIONS

function Calculate(){
  let msg = ""; //so we can bring in the if or else msg (multiple msg): needed to store output string.
  let num = document.getElementById('userInput').value;// grabs the number we put into the input field.
  let wantHighest = document.getElementById('onlyHighest').checked;//determines whether the checkbox is checked.
  let result = allFactors(num, wantHighest);//stores the final returned results of "allFactors"( returns a number or a string).
  if(typeof result === "string"){ //checked to see if result is a string or a number and sets our msg accordingly.
    msg = `There are ${totalFactors} factors of ${num}, and they are ${result}.`;//final message if result is a data type of string.
  }else{//final message if result is a numerical data type or other.
    msg = `The highest factor of ${num} is ${result}.`; //javascript takes the final message and puts it into our p element.
  }

  document.getElementById('jsOutlet').innerHTML = msg;
  totalFactors = 1;// resets back to 1 after a calculation has completed.
}

function Reset(){//resets the value in the text box.js resets the <p> back into an empty string.
  document.getElementById('jsOutlet').innerHTML = "";// js resets the input field back into empty.
  document.getElementById('userInput').value = "";// resets back to the total factors of one.
  totalFactors = 1;
}

// HELPER FUNCTIONS
//either returns all factors of a given number or just the highest factor of that given number.
function allFactors(n, returnHighest) {
let factor = n - 1;  // creates the number to divide itno the original number
  let str = n;//creates a string that contains the starting number.
  while(factor !== 0){//cycles through all the numbers less than the original number.
    // finds if factor is actually is a factor of the original number.
    if(n % factor === 0){
      if(totalFactors === 1 && returnHighest){
        return factor; //runs only if this is the first factor found.
      }
      str += `, ${factor}`;//for each new factor found, add to the string.
      totalFactors++;//adds 1 to totalFactors each time a new factor is found.
    }

    factor--;//provides the new number to be tested in the next cycle.
  }
  return str;//returns the string containing all of the found factors in that happened in the while loop. 
}
