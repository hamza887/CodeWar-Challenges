


//////keeping the square////////

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }

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
