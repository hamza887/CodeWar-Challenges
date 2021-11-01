// HACKER RANK

// Problem Statement

// ORANE AND APPLE  -  HACKER RANK

// FIND ORANGE AND APPLE WHICH FALL IN YOUR HOUSE   

function countApplesAndOranges(s, t, a, b, apples, oranges) {
      let appleCount=0;
      let orangeCount=0;
      for(let i =0;i<apples.length;i++){
          if(a+apples[i]>=s && a+apples[i]<=t){
              appleCount++;
          }
      }
      for(let j=0;j<oranges.length;j++){
          if(b+oranges[j]<=t&& b+oranges[j]>=s) orangeCount++;
      }
    console.log(appleCount);
    console.log(orangeCount);    
}