//HACKER RANK CHALLENGE

//HOW TO COVERT TIME FROM 12 HOURS TO 24 HOURS

function timeConversion(s) {
   let [time,modifier,amPm]=s.split(':');
   if(time==='12'){ time='00'};

   if( amPm.charAt(2)==='P') time=parseInt(time,10)+12

   return `${time}:${modifier}:${amPm.slice(0,2)}`

      // return time
  //  return tim

  //  return `${minutes}`

  // if(hours==='12'){
  //   hours='00';
  // }
  // if(modifier==='PM'){
  //   hours=parseInt(hours,10)+12;
  // }
  // return `${hours}: ${minutes}`;

}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('05:06:34PM'));
console.log(timeConversion('12:00:23PM'));
console.log(timeConversion('12:00:11AM'));