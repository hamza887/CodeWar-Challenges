// lonely interger in array


function lonelyInteger(arr) {
	return arr.find(a=>!arr.includes(-a))
}

lonelyInteger([1, -1, 2, -2, 3]) 
// ➞ 3
// 3 has no matching negative appearance.

// lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) 
// ➞ -4