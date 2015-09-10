// function replace(str, before, after) {
// 	var strArray = str.split(" "); 
// 	var replindex = strArray.indexOf(before); 
// 	strArray[replindex] = strArray[replindex].replace(strArray[replindex], after);
// 	var repstring = strArray.join (" ");
//  	return repstring;
// }

function replace(str, before, after) {
var replaced = "";
var capitalized = ""

	if (before[0] == before[0].toUpperCase()){
		capitalized = after[0].toUpperCase() + after.slice(1);
		replaced = str.replace(before, capitalized);
	}

	else {
		replaced = str.replace(before, after);
	}

	return replaced
}

//Test Cases

//debug(replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
//debug(replace("He is Sleeping on the couch", "Sleeping", "sitting"));
//debug(replace("This has a spellngi error", "spellngi", "spelling"));
//debug(replace("His name is Tom", "Tom", "john"));
//debug(replace("Let us get back to more Coding", "Coding", "bonfires"));