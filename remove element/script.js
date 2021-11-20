// remove element leetcode

const removeElement=(nums,val)=>{
    return nums.reduce((a,b,c,d)=>{
      if(b!==val){
        d[a]=b;
        a++
      }
      return a
    },0)
}

console.log(removeElement([0,1,2,2,3,0,4,2],))