// EDIBAT

// A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

function isOmnipresent(arr, val) {
	const mapArr= arr.map(a=>a.includes(val));
  return mapArr.every(a=>a===true)
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)) 
// ➞ true