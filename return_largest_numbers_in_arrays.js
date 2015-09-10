function largestOfFour(arr) {
	var tempArray = [];

  	for (var i = 0; i <= 3; i++) {
  	var temp = 0;
  		for (var c = 0; c <= 3; c++){
  			if (arr[i][c] > temp) {
  				temp = arr[i][c];
  			}
  		}
  		tempArray.push(temp);
  	}
  return tempArray;
}