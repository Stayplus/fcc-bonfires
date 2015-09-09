// Bonfire: reverse a String

function reverseString(str) {
  var split = str.split(""); // Split the string into an array of characters with the delimiter ""
  var revArray = split.reverse(); // reverse the array
  var revStr = revArray.join(""); //join the array into a string with the delimiter ""
  return revStr; // return the reversed string
}

//tests
debug(reverseString('hello'));
