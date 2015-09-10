
function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]); //debug(min);
  var max = Math.max(arr[0], arr[1]); //debug(max);
  var sum = 0;

  for (var i = min; i <= max; i++){
  	sum += i;
  }

  return sum;
}


//Test Cases
//debug(sumAll([1, 4]));

//debug(sumAll([4, 1]));

//debug(sumAll([5, 10]));

//debug(sumAll([10, 5]));


