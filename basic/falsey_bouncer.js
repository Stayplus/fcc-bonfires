//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Falsey Bouncer
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function bouncer(arr) {
	var temp = arr;

	function false_filter(value) {
		var falseHoods = [false, null, 0, '', undefined, NaN];
		for (var i = 0; i <= falseHoods.length; i++) {
			var boolValue = new Boolean(value); 
			var boolFalse = new Boolean(falseHoods[i]); 
			if (boolValue == false) {
				return false;
			}
			else {
				return true;
			}
		}
	}

	var filteredArr = arr.filter(false_filter);
	return filteredArr;
}

//Test Cases ---------------------------------------------
//debug(bouncer([7, 'ate', '', false, 9]));