// EDABIT 

// CAPITAL ONE LETTER AFTER ANOTHER



const myName=(name)=>{
  let a= name.split('')
  return a.map((a,b)=>b%2==0?a.toLowerCase():a.toUpperCase()).join('')
}
console.log(myName('My name is hamza ZaKA'))