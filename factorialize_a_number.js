function factorialize(num) {
  var sum = 1; // create a container variable for the total factorial
  for (var i = 1; i <= num; i++){ // interate +1 until you reach the number to factorialize
    sum = sum * i; //set the sum equal to the total factorial * the iteration.
  }
  return sum;
}

//tests
debug(factorialize(5));