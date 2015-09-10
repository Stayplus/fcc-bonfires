//--------------------------------------------------------
//FreeCodeCamp Bonfire Challenge - http://freecodecamp.com
//Bonfire: Diff Two Arrays
//Author: stayplus
//Date: September, 2015
//--------------------------------------------------------

function diff(arr1, arr2) {
  var newArr = [];
  var arr1Length = arr1.length; //debug(arr1Length);
  var arr2Length = arr2.length; //debug(arr2Length);
  
  //Case 1 - Arrays are equal
  if (String(arr1) == String(arr2)){
  	return [];
  }

  //case 2 - arr1 is bigger than arr2
  if (arr1Length > arr2Length) {
  	for (var i = 0; i <= arr1Length-1; i++) {
  		if (arr2.indexOf(arr1[i]) === -1) {
  			newArr = newArr.concat(arr1[i]);
  		}
  	}
  }

  //case 3 - arr2 is bigger than arr1 
  if (arr1Length < arr2Length) {
  	for (var i = 0; i <= arr2Length-1; i++) {
  		if (arr1.indexOf(arr2[i]) === -1) {
  			newArr = newArr.concat(arr2[i]);
		}
  	}
  }

  //case 4 - More than one element is different in both arrays
  if (arr1Length === arr2Length) {
  	for (var i = 0; i <= arr1Length-1; i++){
  		if (arr1.indexOf(arr2[i]) === -1){
  			newArr = newArr.concat(arr2[i]);
  		}

  		if (arr2.indexOf(arr1[i]) === -1){
  			newArr = newArr.concat(arr1[i]);
  		}
  	}
  }
  return newArr;
}

//Test Cases ---------------------------------------------
//debug(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// //difference: ['pink wool']
// debug(diff(
// 			['diorite',
// 			'andesite', 
// 			'grass', 
// 			'dirt', 
// 			'pink wool', 
// 			'dead shrub'], 

// 			['diorite', 
// 			'andesite', 
// 			'grass', 
// 			'dirt', 
// 			'dead shrub']));

// //difference ['diorite', 'pink wool']
// debug(diff(
// 			['andesite', 
// 			'grass', 
// 			'dirt', 
// 			'pink wool', 
// 			'dead shrub'], 

// 			['diorite', 
// 			'andesite', 
// 			'grass', 
// 			'dirt', 
// 			'dead shrub']));

// //difference: []
// debug(diff(
// 			['andesite', 
// 			'grass', 
// 			'dirt', 
// 			'dead shrub'], 

// 			['andesite', 
// 			'grass', 
// 			'dirt', 
// 			'dead shrub']));
// //string & numbers: 2 different ['piglet', 4]
// debug(diff(
// 			[1, 
// 			'calf', 
// 			3, 
// 			'piglet'], 

// 			[1, 
// 			'calf', 
// 			3, 
// 			4]));

// //Comparing empty array to full array
// debug(diff(
// 			[], 
// 			['snuffleupagus', 
// 			 'cookie monster', 
// 			 'elmo']));