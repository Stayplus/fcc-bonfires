//-------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Factorialize A Number
//Author: stayplus
//Date: Septemeber, 2015
//-------------------------------------------------------

function factorialize(num) {
  var sum = 1; 
  for (var i = 1; i <= num; i++){ 
    sum = sum * i; 
  }
  return sum;
}

//Test Cases --------------------------------------------
//debug(factorialize(5));