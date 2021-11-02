
// Transform into an Array with No Duplicates


// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.


function set(arr) {
	const finalArr = [];
	let current = arr[0];
	finalArr.push(current);
	
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== current) {
			current = arr[i];
			finalArr.push(current);
		}
	}
	return finalArr;
}

set([1, 3, 3, 5, 5]) 
// ➞ [1, 3, 5]

set([4, 4, 4, 4]) 
// ➞ [4]