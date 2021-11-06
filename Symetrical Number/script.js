// find the number reverse is the same

//Is the Number Symmetrical?

//  Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse



function isSymmetrical(num) {
	 const reverseNum= (num+'').split('').reverse().join('');
   return Number(reverseNum)===num
}






isSymmetrical(7227) 
// ➞ true

isSymmetrical(12567) 
// ➞ false