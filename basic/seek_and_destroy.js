function destroyer(arr) {
var fArray = [];
var currentArg;

	function destro(val) {
		if (val === currentArg){
			return false;
		}

		else{
			return true;
		}
	}

	for (var i = 1; i <= destroyer.arguments.length-1; i++){
		currentArg = arguments[i];
		arr = arr.filter(destro);
		fArray = arr.slice();
	}	

	return fArray;
}


//TEST CASES
//basic: 2 arguments passed to function
//debug(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//Expected [1,1]

//basic: 2 arguments passed to function
//debug(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
//expected: [1,5,1]

//inter: 3 arguments passed to function
debug(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

//Empty case: Should return emtpy array
//debug(destroyer([2, 3, 2, 3], 2, 3));

//inter: Should handle NaN elements
//debug(destroyer(['tree', 'hamburger', 53], 'tree', 53))
