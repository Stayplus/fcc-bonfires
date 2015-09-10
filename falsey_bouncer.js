function bouncer(arr) {
	var temp = arr;

	function false_filter(value) {
		var falseHoods = [false, null, 0, '', undefined, NaN];
		for (var i = 0; i <= falseHoods.length; i++) {
			var boolValue = new Boolean(value); //debug(boolValue);
			var boolFalse = new Boolean(falseHoods[i]); //debug(boolFalse);
			if (boolValue == false) {
				return false;
			}
			else {
				return true;
			}
		}
	}

	var filteredArr = arr.filter(false_filter);
	return filteredArr;
}
bouncer([7, 'ate', '', false, 9]);