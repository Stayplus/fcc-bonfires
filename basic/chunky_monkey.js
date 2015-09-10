//-------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Chunky Monkey
//Author: stayplus
//Date: Septemeber, 2015
//-------------------------------------------------------

function chunk(arr, size) {
	var aLength = arr.length; 
	var index = 0; 
	var tArray = [];

	while (index < aLength){
		tArray.push(arr.slice(index, index+size));
		index += size;
	}
	return tArray;
}

//Test Cases --------------------------------------------
//debug(chunk(['a', 'b', 'c', 'd'], 2));