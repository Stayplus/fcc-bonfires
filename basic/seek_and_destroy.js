//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Seek And Destroy
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function destroyer(arr) {
var fArray = [];
var currentArg;

	function destro(val) {
		if (val === currentArg){
			return false;
		}

		else{
			return true;
		}
	}

	for (var i = 1; i <= destroyer.arguments.length-1; i++){
		currentArg = arguments[i];
		arr = arr.filter(destro);
		fArray = arr.slice();
	}	

	return fArray;
}


//Test Cases ---------------------------------------------
//debug(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//debug(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
//debug(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
//debug(destroyer([2, 3, 2, 3], 2, 3));
//debug(destroyer(['tree', 'hamburger', 53], 'tree', 53))
