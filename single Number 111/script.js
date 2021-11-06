// Leet Code

// 260. Single Number III

//  Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

//You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

const singleNumber =(nums)=> {
    let mySet = new Set();
    for(let i=0; i<nums.length; i++){
        if(mySet.has(nums[i])){
            mySet.delete(nums[i])
        }else{
            mySet.add(nums[i])
        }
    }
    
    return Array.from(mySet);
};

console.log(singleNumber([1,2,1,3,2,5]))