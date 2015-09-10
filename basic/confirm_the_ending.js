//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Confirm The Ending
//Author: stayplus
//Date: Septemeber, 2015
//--------------------------------------------------------

function end(str, target) {

	//case 1 - no spaces; one word
	if (str.indexOf(" ") >= 0){
		var str = str.split(" ");
		if (str[str.length-1] === target){
			return true;
		}

		else {
			return false;
		}

	}

	//case 2 - spaces; sentence
	else {
		var str = str.split("");
		if (str[str.length-1] === target) {
			return true;
		}
		
		else {
			return false;
		}
	}

}

//Test Cases ---------------------------------------------
//debug(end('Bastian', 'n'));