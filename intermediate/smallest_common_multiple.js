function smallestCommons(arr) {
	var range_start = Math.min(arr[0], arr[1]);
	var range_end = Math.max(arr[0], arr[1]); 
	var scm = false;
	var n = range_end;

	while (true){
		for (var i = range_end; i >= range_start; i--){
			if (n % i !== 0){
				scm = false;
				break;
			}
			scm = true;
		}
		if (scm === true){
			return n;
		}
		n++;
	}
}

//debug(smallestCommons([1,20]));

/*
NOTES:
60 / 5 = 12
60 / 4 = 15
60 / 3 = 20
60 / 2 = 30
60 / 1 = 60


function smallestCommons(arr) {
	var range_start = Math.min(arr[0], arr[1]);
	var range_end = Math.max(arr[0], arr[1]); 
	var scm = false;

	for (var c = range_end; c++;){
		for (var i = range_end; i >= range_start; i--){
			if (c % i !== 0){
				scm = false;
				break;
			}
			scm = true;
		}
		if (scm === true){
			return c;
			break;
		}
	}
}
*/


