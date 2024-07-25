/*
https://leetcode.com/problems/sliding-subarray-beauty/description/

Given an integer array nums containing n integers, find the beauty of each subarray of size k.

The beauty of a subarray is the xth smallest integer in the subarray if it is negative, or 0 if there are fewer than x negative integers.

Return an integer array containing n - k + 1 integers, which denote the beauty of the subarrays in order from the first index in the array.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,-1,-3,-2,3], k = 3, x = 2
Output: [-1,-2,-2]
Explanation: There are 3 subarrays with size k = 3. 
The first subarray is [1, -1, -3] and the 2nd smallest negative integer is -1. 
The second subarray is [-1, -3, -2] and the 2nd smallest negative integer is -2. 
The third subarray is [-3, -2, 3] and the 2nd smallest negative integer is -2.
Example 2:

Input: nums = [-1,-2,-3,-4,-5], k = 2, x = 2
Output: [-1,-2,-3,-4]
Explanation: There are 4 subarrays with size k = 2.
For [-1, -2], the 2nd smallest negative integer is -1.
For [-2, -3], the 2nd smallest negative integer is -2.
For [-3, -4], the 2nd smallest negative integer is -3.
For [-4, -5], the 2nd smallest negative integer is -4. 
Example 3:

Input: nums = [-3,1,2,-3,0,-3], k = 2, x = 1
Output: [-3,0,-3,-3,-3]
Explanation: There are 5 subarrays with size k = 2.
For [-3, 1], the 1st smallest negative integer is -3.
For [1, 2], there is no negative integer so the beauty is 0.
For [2, -3], the 1st smallest negative integer is -3.
For [-3, 0], the 1st smallest negative integer is -3.
For [0, -3], the 1st smallest negative integer is -3.
 

Constraints:

n == nums.length 
1 <= n <= 105
1 <= k <= n
1 <= x <= k 
-50 <= nums[i] <= 50 
*/

/*
Questions:
- any input constraints?
- runtime constraints?
- aux space constraints?

Solution:
- BRUTE find all subarrays of length k, sort each subarray, return the xth smallest integer if it is negative or 0 for each subarray
  let left = 0;
  let right = 0;
  const sub: number[] = []
  const result: number[] = []
  while (right < nums.length) {
    sub.push(nums[right])
    right += 1
    if (right - left === k) {
      const sorted = [...sub].sort((a,b) => a < b ? -1 : 1)
      result.push(sorted[x - 1] < 0 ? sorted[x - 1] : 0)
      sub.splice(0, 1)
      left += 1
    }
  }
  return result
*/
function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
  // not fast enough
  // 
  // function binarySearchIdx(arr: number[], n: number) {
  //   let start = 0
  //   let end = arr.length - 1
  //   let mid = 0
  //   while (start < end) {
  //     mid = Math.floor((start + end) / 2)
  //     if (n <= arr[mid]) {
  //       end = mid
  //     } else {
  //       start = mid + 1
  //     }
  //   }
  //   return arr[start] >= n ? start : start + 1
  // }
  // let left = 0;
  // const sub: number[] = []
  // const result: number[] = []
  // for (let i = 0; i < k; i += 1) {
  //   sub.push(nums[i])
  // }
  // const subSorted = [...sub].sort((a,b) => a < b ? -1 : 1)
  // result.push(subSorted[x - 1] < 0 ? subSorted[x - 1] : 0)
  // for (let i = 0; i + k < nums.length; i += 1) {
  //   const next = nums[i + k]
  //   sub.push(next)
  //   const [prev] = sub.splice(0, 1)
  //   const insertIndex = binarySearchIdx(subSorted, next)
  //   subSorted.splice(insertIndex, 0, next)
  //   const deleteIndex = binarySearchIdx(subSorted, prev)
  //   subSorted.splice(deleteIndex, 1) 
  //   result.push(subSorted[x - 1] < 0 ? subSorted[x - 1] : 0)
  // }
  // return result

  // solution from: https://leetcode.com/problems/sliding-subarray-beauty/solutions/4799621/sliding-window-frequency-100-faster-typescript-solution-o-n-k-time-and-o-k-space-complexity/
    let res = [];
    let counts = new Array(101).fill(0);
    let left = 0
    let right = 0
    while (right < nums.length) {
        counts[nums[right] + 50] += 1
        while (right - left + 1 === k) {
            let xth = 0;
            let beauty = 0;
            for (let i = 0; i < 50; i += 1) {
                if (xth >= x) {
                  break
                }
                if (i - 50 < 0 && counts[i] > 0) {
                    xth += counts[i];
                    beauty = i - 50;
                }
            }
            res.push(xth < x ? 0 : beauty)
            counts[nums[left] + 50] -= 1
            left += 1
        }
        right += 1
    }

    return res
}

// console.log('should be: [-1,-2,-2]', getSubarrayBeauty([1,-1,-3,-2,3], 3, 2))
// console.log('should be: [-1,-2,-3,-4]', getSubarrayBeauty([-1,-2,-3,-4,-5], 2, 2))
// console.log('should be: [-3,0,-3,-3,-3]', getSubarrayBeauty([-3,1,2,-3,0,-3], 2, 1))
// console.log('should be: [-25,-25,-25]', getSubarrayBeauty([-29,48,-25,-47,-29,9], 4, 3))