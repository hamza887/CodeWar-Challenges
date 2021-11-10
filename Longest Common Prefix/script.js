// LEETCODE

//14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
      const element = strs[i];
      console.log(element)
      console.log('result '+ result)
      while(!element.startsWith(result)) {
        console.log('while result '+result)
        result = result.substring(0,result.length-1)
      }
      if(result == "") break;


      
    }
    return result;
};

console.log(longestCommonPrefix(["flower","flow","floght"]));