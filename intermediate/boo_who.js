function boo(bool) {
	if (bool === true) {
		return true;
	}

	if (bool === false){
		return true;
	}

	else {
		return false;
	}
}

//test cases
debug(boo(null));
// debug(boo(true));
// debug(boo(false));
// debug(boo([1,2,3]));
// debug(boo([function: slice]));
// debug(boo({a:1}));
// debug(boo(1));
// debug(boo(NaN));
// debug(boo('a'));

