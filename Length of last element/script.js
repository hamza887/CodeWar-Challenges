// Leetcode

// Length of Last Word

// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.







const lengthOfLastWord =(s)=> {
    return s.trim().split(' ').slice(-1)[0].length
     
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))