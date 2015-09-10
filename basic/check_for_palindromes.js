//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Check For Palindromes
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function palindrome(str) {
  var str = str.replace(/[\W\s]/g, "").toLowerCase();
  var str = str.split("");
  var sArray = str.slice(0);
  var revArray = sArray.reverse();
  var swtch = false;

  for (var i = 0; i < sArray.length; i++) {
  	if (str[i] !== revArray[i]) {
  		swtch = false;
  		break;
  	}
  	else {
  		swtch = true;
  	}
  }

  if (swtch === true) {
    return true;
  }
  
  else {
    return false;
  }
}

//Test Cases ---------------------------------------------
//debug(palindrome("eye"));
//debug(palindrome("cat"));
//debug(palindrome("almostomla"));
//debug(palindrome("never odd or even"));