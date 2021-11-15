// EDIBAT

// Return the Highest and Lowest Numbers

// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).


function highLow(str) {
	let newStr= str.split(' ');
   return `${Math.max(...newStr)} ${Math.min(...newStr) }`
}

console.log(highLow("1 2 3 4 5"))