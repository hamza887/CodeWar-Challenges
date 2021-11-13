

// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.


function num_of_digits(num) {
	const s=num.toString();
	if(s.includes('-')){
		return s.length-1
	}else{
		return s.length
	}
}

num_of_digits(1000) 
// ➞ 4

num_of_digits(12) 
// ➞ 2