//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Finders Keepers
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function find(arr, func) {
	if (arr.some(func) === true){
		for (var i = 0; i <= arr.length; i++){
			if (func(arr[i]) === true){
				return arr[i];
			}
		}
	}

	else {
		return undefined;
	}
  
}

//Test Cases ---------------------------------------------
//debug(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
//debug(find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
//debug(find([1, 3, 5, 9], function(num) { return num % 2 === 0; }));