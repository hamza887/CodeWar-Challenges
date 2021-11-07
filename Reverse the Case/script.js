// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.





function reverseCase(str) {
  // let output = []
	// for (let i=0; i<str.length; i++) {
	// 	if (str[i] === str[i].toLowerCase()) {
	// 		output.push(str[i].toUpperCase())
	// 	} else if (str[i] === str[i].toUpperCase()) {
	// 		output.push(str[i].toLowerCase())
	// 	} else {
	// 		output.push(str[i])
	// 	}
	// }
	// return output.join('')
  
  //     let output=[]
  //  const newStr=str.split('')
  // for(let i =0;i<newStr.length;i++){
  //   if(newStr[i]===newStr[i].toLowerCase()){
  //     output.push(newStr[i].toUpperCase())
  //   }else if(newStr[i]===newStr[i].toUpperCase()){
  //     output.push(newStr[i].toLowerCase())
  //   }
  // }
  // return output.join('')

  return str.split('').map(a=>a===a.toLowerCase()?a.toUpperCase():a.toLowerCase()).join('')
}

reverseCase("Happy Birthday") 
// ➞ "hAPPY bIRTHDAY"

reverseCase("MANY THANKS") 
// ➞ "many thanks"

reverseCase("sPoNtAnEoUs") 
// ➞ "SpOnTaNeOuS"