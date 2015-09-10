function replacer(string, re){
	return string.toLowerCase().replace(re, "-");
}

function spinalCase(str) {
	var re_caps = /(?=[A-Z])/;
	var re_spaces = /\s/g;
	var re_us = /_/g;

  	if (re_spaces.test(str)){
  		return replacer(str, re_spaces);
  	}

  	if (re_us.test(str)) {
  		return replacer(str, re_us);
  	}

  	if (re_caps.test(str)){	
  		return replacer(str.split(re_caps).join(" "), re_spaces);
  	}
}

spinalCase('This Is Spinal Tap');