// Phone Number Formatting


// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(numbers) {
  
  
  numbers.splice(0,0,'(');
  numbers.splice(4,0,') ');
  numbers.splice(8,0,'-');
  return numbers.join('');
}


console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) 
// ➞ "(123) 456-7890"

// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]))
//  ➞ "(519) 555-4468"