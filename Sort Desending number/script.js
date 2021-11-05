//Sort Numbers in Descending Order

// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.


function sortDescending(num) {
		const mynum= num.toString().split('')
		     const sorted=mynum.sort((a,b)=>b-a);
	  return Number(sorted.join(''))
    
}





sortDescending(123) 
// ➞ 321

sortDescending(1254859723) 
// ➞ 9875543221

sortDescending(73065) 
// ➞ 76530