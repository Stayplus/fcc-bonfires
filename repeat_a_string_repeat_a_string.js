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
repeat('abc', 3);