// EDIABAT


// Find the Largest Numbers in a Group of Arrays


// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
  return arr.map(a=> Math.max(...a))
}


console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])) 
// ➞ [7, 90, 2]

console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])) 
// ➞ [-34, -2, 7]