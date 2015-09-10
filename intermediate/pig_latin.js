//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Pig Latin
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function translate(str) {
	var strArray = str.split("")
	var vowels = ["a", "e", "i", "o", "u"];
	var before = "";
	var after = "";
	var fString = "";

	if (vowels.indexOf(str[0]) !== -1){
		fString = str + "way";
	}

	else {
		var index = 0;
		while(vowels.indexOf(strArray[index]) === -1){
			before = str.substr(0, index+1); 
			after = str.substr(index+1); 
			fString = after + before + "ay";
			index++;
		} 
	}
	return fString;
}


//Test Cases ---------------------------------------------
//debug(translate("consonant"));
//debug(translate("california"));
//debug(translate("paragraphs"));
//debug(translate("glove"));
//debug(translate("algorithm"));
//debug(translate("eight"));
