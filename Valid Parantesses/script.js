// LEETCOD E

// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid=(s)=>{
   const regex=/(\{\})|(\[\])|(\(\))/g
   while(s.match(regex)){
     s=s.replace(regex,'')
   };
   return s===''
       
   }

console.log(isValid('({))'))