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

truncate('A-tisket a-tasket A green and yellow basket', 11);