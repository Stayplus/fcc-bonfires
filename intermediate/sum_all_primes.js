//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Sum All Primes
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function isPrime(num){
	for (var i = 2; i <= Math.sqrt(num); i++){
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function sumPrimes(num) {
	var sum = 0;
	for (var i = 2; i <= num; i++){
		if (isPrime(i)){	
			sum += i;
		}
	}
  	return sum;
}

//Test Cases ---------------------------------------------
//debug(sumPrimes(977));
//debug(sumPrimes(17));
//debug(sumPrimes(977));
