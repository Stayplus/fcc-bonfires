//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Drop It
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function drop(arr, func) {
  if (arr.some(func) === true){
  	for (var i = 0; i <= arr.length; i++){
  		if (func(arr[i]) === true) {
  			return arr.slice(i);
  		}
	}
  }

  else {
  	return [];
  }
}

//Test Cases ---------------------------------------------
//debug(drop([1, 2, 3], function(n) {return n < 3; }));
//debug(drop([1, 2, 3, 4], function(n) {return n >= 3; }));
//debug(drop([1, 2, 3], function(n) {return n > 0; }));
//debug(drop([1, 2, 3, 4], function(n) {return n > 5; }));