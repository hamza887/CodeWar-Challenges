// EDIBAT

// Write a function that takes a string as an argument and returns the left most digit in the string.

function leftDigit(num) {
const regex=	/[1-9]/g;
 const newNum= num.match(regex)
 return newNum[0]
}

console.log(leftDigit("TrAdE2W1n95!")) 
// /➞ 2