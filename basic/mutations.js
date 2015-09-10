//-------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Mutations
//Author: stayplus
//Date: September, 2015
//-------------------------------------------------------

function mutation(arr) {
	var first = arr[0].toLowerCase(); 
	var second = arr[1].toLowerCase(); 
	var fLength = first.length-1; 
	var sLength = second.length-1
	var swtch = false;

	for (var i = 0; i <= fLength; i++){ 
		for (var c = 0; c <= sLength; c++){ 
			if (first.indexOf(second[c]) !== -1){
				swtch = true;
			}
			else{
				return false;
			}
		}
	}
return swtch;
}

//Test Cases --------------------------------------------
//debug(mutation(['hello', 'hey']));