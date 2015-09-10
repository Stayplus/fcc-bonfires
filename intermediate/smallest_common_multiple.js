//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Smallest Common Multiple
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function smallestCommons(arr) {
	var range_start = Math.min(arr[0], arr[1]);
	var range_end = Math.max(arr[0], arr[1]); 
	var scm = false;
	var n = range_end;

	while (true){
		for (var i = range_end; i >= range_start; i--){
			if (n % i !== 0){
				scm = false;
				break;
			}
			scm = true;
		}
		if (scm === true){
			return n;
		}
		n++;
	}
}

//Test Cases ---------------------------------------------
//debug(smallestCommons([1,20]));



