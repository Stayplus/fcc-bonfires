function slasher(arr, howMany) {
	var tArray = [];

	if (howMany < arr.length && howMany !== 0){
		tArray = arr.splice(0,2);
		return arr;
	}

	if (howMany > arr.length) {
		return tArray;
	}

	 return arr;
}

slasher([1, 2, 3], 2);