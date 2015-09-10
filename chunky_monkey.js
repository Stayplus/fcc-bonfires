function chunk(arr, size) {
	var aLength = arr.length; //debug(alength);
	var index = 0; //debug(index);
	var tArray = [];

	while (index < aLength){
		tArray.push(arr.slice(index, index+size));
		index += size;
	}
	return tArray;
}

chunk(['a', 'b', 'c', 'd'], 2);