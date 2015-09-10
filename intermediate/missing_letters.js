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


//debug(fearNotLetter('abce'));
//debug(fearNotLetter('bcd'));