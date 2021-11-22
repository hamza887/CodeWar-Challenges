// LEETCODE

// 66. Plus One

// I personally like the first one

// const plusOne = (digits)=> {
//      return String(BigInt(digits.join("")) + 1n).split("").map(Number);
// };


const plusOne = (d)=> {
  // let i= digits.length-1;
  // while(i>-1){
  //   digits[i]++
  //   if(digits[i]<10) return digits;
  //   digits[i]=0;
  //   i--
  // }
  // return [1,...digits]
  let i=d.length-1
  while(i>-1){
    d[i]++
    if(d[i]<10) return d;
    d[i]=0;
    i--
  }
  return [1,...d]
};

console.log(plusOne([1,2,9]))