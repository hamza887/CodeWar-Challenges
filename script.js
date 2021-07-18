


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
