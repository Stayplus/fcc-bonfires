//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Repeat A String Repeat A String
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function repeat(str, num) {
	temp = "";
	if (num > -1) {
		for (var i = 0; i <= num-1; i++){
			temp = temp.concat(str);
		}
		return temp;
	}

	else{
		return "";
	}
}

//Test Cases ---------------------------------------------
//debug(repeat('abc', 3));