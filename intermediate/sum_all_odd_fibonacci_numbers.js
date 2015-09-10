function sumFibs2(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        var added = currNumber + prevNumber;
        prevNumber = currNumber;
        currNumber = added;
    }

    return result;
}



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

debug(sumFibs(1000));