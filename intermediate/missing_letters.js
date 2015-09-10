//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Missing Letters
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function fearNotLetter(str) {
	var fString = "";
	for (var i = 0; i <= str.length; i++){
		if (!isNaN(str.charCodeAt(i+1)) && (str.charCodeAt(i+1) - str.charCodeAt(i) !== 1)){
		 	fString = String.fromCharCode(str.charCodeAt(i) + 1);
		 	break;
		}
	}
	if (fString != ""){
		return fString;
	}
}

//Test Cases ---------------------------------------------
//debug(fearNotLetter('abce'));
//debug(fearNotLetter('bcd'));