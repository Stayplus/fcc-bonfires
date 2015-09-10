function end(str, target) {
	//two cases

	//case 1 - no spaces; one word
	if (str.indexOf(" ") >= 0){
		var str = str.split(" ");
		if (str[str.length-1] === target){
			return true;
		}

		else {
			return false;
		}

	}

	//case 2 - spaces; sentence
	else {
		var str = str.split("");
		if (str[str.length-1] === target) {
			return true;
		}
		
		else {
			return false;
		}
	}

}

end('Bastian', 'n');