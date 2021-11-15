// EDABIT 

// Summing a Slice

// Given an array and an integer n, return the sum of the first n numbers in the array

function sliceSum(arr, n) {
	const newArr= arr.slice(0,n)
  return newArr.reduce((a,b)=>a+b)
}

// sliceSum([4, 2, 5, 7], 4) 
// ➞ 18