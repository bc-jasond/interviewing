/*
https://leetcode.com/problems/count-the-number-of-good-subarrays/description/

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1,1,1], k = 10
Output: 1
Explanation: The only good subarray is the array nums itself.
Example 2:

Input: nums = [3,1,4,3,2,2,4], k = 2
Output: 4
Explanation: There are 4 different good subarrays:
- [3,1,4,3,2,2] that has 2 pairs.
- [3,1,4,3,2,2,4] that has 3 pairs.
- [1,4,3,2,2,4] that has 2 pairs.
- [4,3,2,2,4] that has 2 pairs.
 
   i
[6,3,1,4,4,3,2,2,4]
           j              
counts {3:2,1:1,4:2}
[6,3,1,4,4,3]
[6,3,1,4,4,3,2]
[6,3,1,4,4,3,2,2]
[6,3,1,4,4,3,2,2,4]
[3,1,4,4,3]
Constraints:

1 <= nums.length <= 105
1 <= nums[i], k <= 109
*/

/*

Solution:
- use two pointers, find all subarrays, keep counts of duplicate values, increase result counter when k duplicates is true, return result count 

*/
function countGood(nums: number[], k: number): number {
  const counts: Record<number,number> = {}
  let l = 0
  let currentPairCount = 0
  let result = 0

  for (let r = 0; r < nums.length; r += 1) {
      const current = nums[r]
      if (!counts.hasOwnProperty(current)) {
          counts[current] = 0
      }
      currentPairCount += counts[current]
      counts[current] += 1
      while (l < r && currentPairCount >= k) {
          // this is non-intuitive - add length of input minus r index 🤯
          result += nums.length - r
          counts[nums[l]] -= 1
          currentPairCount -= counts[nums[l]]
          l += 1
      }
  }
  return result
};