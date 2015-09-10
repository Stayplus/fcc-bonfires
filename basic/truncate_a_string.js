//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Truncate A String
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function truncate(str, num) {

	if (str.length <= num) {
		return str;
	}

	else {
		var num = num - 3;
		var str = str.slice(0,num).concat("...");
		return str;
	}
}

//Test Cases ---------------------------------------------
//debug(truncate('A-tisket a-tasket A green and yellow basket', 11));