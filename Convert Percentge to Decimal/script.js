//  Convert to Decimal Notation

//  Create a function to convert an array of percentages to their decimal equivalents.


function convertToDecimal(perc) {
	return perc.map(a=> parseFloat(a) / 100.0)
}

convertToDecimal(["1%", "2%", "3%"]) 
// ➞ [0.01, 0.02, 0.03]