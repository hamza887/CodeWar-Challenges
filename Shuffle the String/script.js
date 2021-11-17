// EDIBAT

// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together

function indexShuffle(str) {
	const splitLetter= str.split('')
   const even= splitLetter.filter((a,b)=>b%2==0).join('')
   const odd=splitLetter.filter((a,b)=>b%2).join('')
   const h=splitLetter.filter((a,b)=>console.log(b))

   return even+odd

}


console.log(indexShuffle("abcdefg"))