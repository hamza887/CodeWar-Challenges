// LLETCODE

// Given two binary strings a and b, return their sum as a binary string.

var addBinary = function(a, b) {
  let bA=BigInt(`0b${a}`)
  let bB=BigInt(`0b${b}`)
  let sum= bA+bB
  return sum.toString(2)

  
};



console.log(addBinary(11,1))