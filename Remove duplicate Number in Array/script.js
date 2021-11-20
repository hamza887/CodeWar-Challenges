
// removing duicate numbers in an array

const duplicate=(s)=>{
   return s.filter((a,b)=>s.indexOf(a)==b)
}

console.log(duplicate([1,10,2,5,2,1,8]))