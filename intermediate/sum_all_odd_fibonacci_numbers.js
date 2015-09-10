//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Sum All Odd Fibonacci Numbers
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function sumFibs(num){
    var sum = 0
    var previous = 0;
    var current = 1;
    var next = 0;

    while (current <= num){
        debug(current);
        if (current % 2 !== 0){
            sum += current;
        }
        next = current + previous;
        previous = current;
        current = next;
    }
    return sum
}

//Test Cases ---------------------------------------------
//debug(sumFibs(1000));