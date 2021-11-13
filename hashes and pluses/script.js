
//   Hashes and Pluses

//  Create a function that returns the number of hashes and pluses in a string.



function hashPlusCount(str) {
  let h=0;
  let j=0
	const s= str.split('')
  s.map((a)=>a.includes('+')?h++:j++)
  return [j,h]
}


hashPlusCount("###+")
//  ➞ [3, 1]

// console.log(hashPlusCount("##+++#")) 
// ➞ [3, 3]