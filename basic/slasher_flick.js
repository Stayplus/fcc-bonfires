//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Slasher Flick
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function slasher(arr, howMany) {
	var tArray = [];

	if (howMany < arr.length && howMany !== 0){
		tArray = arr.splice(0,2);
		return arr;
	}

	if (howMany > arr.length) {
		return tArray;
	}

	 return arr;
}

//Test Cases ---------------------------------------------
//debug(slasher([1, 2, 3], 2));