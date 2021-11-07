// EDIBAT

//FIND THE CAR WIHT THE STRING


function firstPlace(road) {
	const regex=/[A-Z|a-z]/g;
  if(road===''){return 'No road available'}

	if(road.match(regex)){
	const newNumber=road.match(regex)
  return newNumber.pop()
	}else{
		return 'No car available'
	}
}

console.log(firstPlace("======"))
console.log(firstPlace(""))
console.log(firstPlace("====V DF R= A="))