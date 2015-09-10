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
			before = str.substr(0, index+1); //debug(before);
			after = str.substr(index+1); //debug(after);
			fString = after + before + "ay";
			index++;
		} 
	}
	return fString;
}


//test cases

//debug(translate("consonant"));
//debug(translate("california"));
// debug(translate("paragraphs"));
//debug(translate("glove"));
//debug(translate("algorithm"));
//debug(translate("eight"));


	// else {
	// 	for (var i = 0; i <= strArray.length; i++){
	// 		if (vowels.indexOf(strArray[i]) === -1){
	// 			before = str.substr(0, i+1); //debug(before);
	// 			after = str.substr(i+1); //debug(after);
	// 			fString = after + before + "ay";
	// 			break;
	// 		}

	// 	}
	// }