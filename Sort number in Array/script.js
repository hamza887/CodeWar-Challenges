
// Edibat Sort number in Array

function sortNumsAscending(arr) {
	if(arr==null) return []
	else return arr.sort((a,b)=>a-b)
}

sortNumsAscending([1, 2, 10, 50, 5]) 
// ➞ [1, 2, 5, 10, 50]

sortNumsAscending([80, 29, 4, -95, -24, 85]) 
// ➞ [-95, -24, 4, 29, 80, 85]

sortNumsAscending(null) 
// ➞ []

sortNumsAscending([]) 
// ➞ []