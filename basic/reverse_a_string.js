//-------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Reverse A String
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function reverseString(str) {
  var split = str.split(""); 
  var revArray = split.reverse(); 
  var revStr = revArray.join(""); 
  return revStr; 
}

//Test Cases ---------------------------------------------
//debug(reverseString('hello'));
