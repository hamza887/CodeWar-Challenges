


//////keeping the square////////

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }


  console.log('hello world`');



////WHO LIKES IT /////////

function likes(names) {
  if(names.length === 0) return "no one likes this";
  if(names.length === 1) return names[0] + " likes this";
  if(names.length === 2) return names[0] + " and " + names[1] + " like this";
  if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}


add2 = (x) => x + 2;
add3 = (x) => x + 3;
add5 = (x) => x + 5;
add7 = (x) => x + 7;
add11 = (x) => x + 11;


////take a 10 min walk

function isValidWalk(walk) {
    let ns = 0, ew = 0; 
    if(walk.length === 10){
      for (let i of walk) { 
        if (i == 'n') ns += 1; 
        if (i == 's') ns -= 1; 
        if (i == 'e') ew += 1; 
        if (i == 'w') ew -= 1; 
      } 
    }
    else
      return false
      return ns === 0 && ew === 0; 
  }


///// bouncing balls

/*A child plays with a ball on the nth floor of a big building. The height of this floor is known.

(float parameter "h" in meters. Condition 1) : h > 0)

He lets out the ball. The ball bounces for example to two-thirds of its height.

(float parameter "bounce". Condition 2) : 0 < bounce < 1)

His mother looks out of a window that is 1.5 meters from the ground.

(float parameters "window". Condition 3) : window < h).

How many times will the mother see the ball either falling or bouncing in front of the window?

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note

You will admit that the ball can only be seen if the height of the rebouncing ball is stricty greater than the window parameter.

Example:

h = 3, bounce = 0.66, window = 1.5, result is 3

h = 3, bounce = 1, window = 1.5, result is -1 (Condition 2) not fulfilled).
*/
//The first two solutions use while loop. However, this could run into range error if the loop runs too many times.
//Solution 1-My solution
// function bouncingBall(h,  bounce,  window) {
//   var count=0;
//   if(h>0 && bounce>0 && bounce<1 && window<h){
//     count=1;
//   }else{
//     return -1;
//   }
//   h=h*bounce;
//   while(h>window){
//     count+=2;
//     h=h*bounce; 
//   }
//   return count;
// }

//Solution 2
/*function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) {
    while (h > window) {
      rebounds+=2,
      h *= bounce;
    }
  }  
  return rebounds;
}
*/
function bouncingBall(h,bounce,w){
  return rebounds = (bounce>0 && bounce<1 && w<h) ?(1+2*Math.floor(Math.log(w/h)/Math.log(bounce))):-1;
}

//   Solution 3: this would not run into range error;
//const bouncingBall=(h, b, w)=>(b>=1 || h<w || b<=0) ? -1 : Math.ceil(Math.log(w/h)/Math.log(b))*2-1;
bouncingBall(3,0.66,1.5);
bouncingBall(30, 0.9999999999, 1)
  /// finding min and max numbers 

	function minMax(arr) {
	const min= Math.min(...arr);
  const max= Math.max(...arr);
   return [min,max]
}

console.log(minMax([1, 2, 3, 4, 5])) 
// ➞ [1, 5]

console.log( minMax([2334454, 5]))
//  ➞ [5, 2334454]


// Only first 3 characters

 function frontThree(str) {
	const sliceitems= str.slice(0,3).repeat(3);
   return sliceitems
}

console.log(frontThree("Python"))
//  ➞ "PytPytPyt"

console.log(frontThree("Cucumber"))
//  ➞ "CucCucCuc"


/// covid cases 

 function endCorona(recovers, newCases, activeCases) {
	return Math.ceil(activeCases/(recovers-newCases))
}
// endCorona(4000, 2000, 77000) ➞ 39

// endCorona(3000, 2000, 50699) ➞ 51

// endCorona(30000, 25000, 390205) ➞ 79



function timeForMilkAndCookies(date) {
	return date.getMonth()===11
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))) 
// ➞ true


//// Largest Number

function whichIsLarger(f, g) {
	if(f()>g()){
    return 'f'
  }else if(f()<g()){
		return 'g'
	}else{
		return 'neither'
	}
}

console.log(whichIsLarger(() => 5, () => 10))
//  ➞ "g"

console.log(whichIsLarger(() => 25,  () => 25)) 
// ➞ "neither"



/////WORDS END WITH 

function isPlural(word) {
	return word.endsWith('s')
}


/////Retun Types

function arrayValuesTypes(arr) {
	return arr.map(e=> typeof e)
}

arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]


///// converting array into string

function parseArray(arr) {
	return arr.map(String);
}

function countTrue(arr) {
	const lengthwords= arr.filter(words=>words===true);
  return lengthwords
}

console.log(countTrue([true, false, false, true, false,'hamza','jfjf',false,'false'])) 
// ➞ 2

console.log(countTrue([false, false, false, false])) 
// ➞ 0



///// Sort numbers

function tuckIn(arr1, arr2) {
	const myValue= arr1.pop();
  // console.log(myValue);
  const myArray=arr1.concat(arr2);
  // console.log(myArray);
  myArray.push(myValue)
  return myArray
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))
//  ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(tuckIn([15,150], [45, 75, 35])) 
// ➞ [15, 45, 75, 35, 150]


function flickSwitch(arr) {
		let b = true;
  return arr.map(x => x === 'flick'? b=!b:b );

}



console.log(flickSwitch(["edabit", "flick", "eda", "bit"])) 
// ➞ [true, false, false, false]

console.log(flickSwitch(["flick", 11037, 3.14, 53])) 
// ➞ [false, false, false, false]



function isFirstSuperior(arr1, arr2) {
	for(let i =0; i<=arr1.length && i<=arr2.length;i++){
    return arr1!==arr2
  }
}

console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])) 
// ➞ true
console.log(isFirstSuperior([1, 2, 4], [1, 2, 3])) 
// ➞ true


// function flickSwitch(arr) {
// 		let b = true;
//   return arr.map(x => x === 'flick'? b=!b:b );

// }



// console.log(flickSwitch(["edabit", "flick", "eda", "bit"])) 
// // ➞ [true, false, false, false]

// console.log(flickSwitch(["flick", 11037, 3.14, 53])) 
// // ➞ [false, false, false, false]



// function isFirstSuperior(arr1, arr2) {
// 	for(let i =0; i<=arr1.length && i<=arr2.length;i++){
//     return arr1!==arr2
//   }
// }

// console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])) 
// // ➞ true
// console.log(isFirstSuperior([1, 2, 4], [1, 2, 3])) 
// // ➞ true


function FirstFactorial(num) { 
  let finalNum=1;
 for( let i=1;i<=num;i++){
   finalNum*=i
 }
 return finalNum

}
   
// keep this function call here 
console.log(FirstFactorial(8));

/// If you want to build a # trainagle 

// for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i).padStart(n));
// }

//Complete triplets

const completeTriplets=(a,b)=>{
   let aValue=0;
   let bvalue=0;
   for(let i=0;i<a.length;i++){
     if(a[i]<b[i]){
       aValue++;
     }if(a[i]>b[i]){
       bvalue++
     }
   }
   return [aValue,bvalue]
}

console.log(completeTriplets([5,6,7],[3,6,10]));

// function flickSwitch(arr) {
// 		let b = true;
//   return arr.map(x => x === 'flick'? b=!b:b );

// }



// console.log(flickSwitch(["edabit", "flick", "eda", "bit"])) 
// // ➞ [true, false, false, false]

// console.log(flickSwitch(["flick", 11037, 3.14, 53])) 
// // ➞ [false, false, false, false]



// function isFirstSuperior(arr1, arr2) {
// 	for(let i =0; i<=arr1.length && i<=arr2.length;i++){
//     return arr1!==arr2
//   }
// }

// console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])) 
// // ➞ true
// console.log(isFirstSuperior([1, 2, 4], [1, 2, 3])) 
// // ➞ true


// function FirstFactorial(num) { 
//   let finalNum=1;
//  for( let i=1;i<=num;i++){
//    finalNum*=i
//  }
//  return finalNum

// }
   
// // keep this function call here 
// console.log(FirstFactorial(8));

//Complete triplets

// const completeTriplets=(a,b)=>{
//    let aValue=0;
//    let bvalue=0;
//    for(let i=0;i<a.length;i++){
//      if(a[i]<b[i]){
//        aValue++;
//      }if(a[i]>b[i]){
//        bvalue++
//      }
//    }
//    return [aValue,bvalue]
// }

// console.log(completeTriplets([5,6,7],[3,6,10]));


// function staircase(n) {
//     for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i).padStart(n));
// }
// }
//  console.log(staircase(6))
