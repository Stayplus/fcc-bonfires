//-------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Title Case A Sentence
//Author: stayplus
//Date: September, 2015
//-------------------------------------------------------

function titleCase(str) {
  var str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
  	str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
  }

  str = str.join(" ");
  return str;
}

//Test Cases --------------------------------------------