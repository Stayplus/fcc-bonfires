function where(arr, num) {
	function numeric_ascending(a, b){
		if (a < b){
			return -1;
		}

		if (a > b){
			return 1;
		}

		if (a === b){
			return 0;
		}
	}
	arr.push(num);
	var sorted = arr.sort(numeric_ascending); 
	return sorted.indexOf(num);
}

// test cases
//debug(where([40, 60], 50));
//debug(where([10, 20, 30, 40, 50], 30);
//debug(where([40, 60], 50);
//debug(where([5, 3, 20, 3], 3));
//debug(where([2, 20, 10], 1));
//debug(where([2, 5, 10], 15);
