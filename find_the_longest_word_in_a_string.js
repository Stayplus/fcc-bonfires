function findLongestWord(str) {
	var strArray = str.split(" ");
	var temp = 0;

	for (var i = 0; i <= strArray.length - 1; i++) {
		if (strArray[i].length > temp) {
			temp = strArray[i].length;
		}
	}
  return temp;
}