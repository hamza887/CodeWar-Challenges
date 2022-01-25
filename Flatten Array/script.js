const flatten=(arr)=>{
    let arr2=[];
    for(let i =0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
     arr2.push(arr[i][j])
    // console.log(arr[i][j])
      }
    }
    return arr2
}

flatten([[1, 2], [3, 4]]) 
// ➞ []
// Expected: [1, 2, 3, 4]