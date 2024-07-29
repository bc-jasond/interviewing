/*
https://leetcode.ca/all/1570.html

1570. Dot Product of Two Sparse Vectors
Given two sparse vectors, compute their dot product.

Implement class SparseVector:

SparseVector(nums) Initializes the object with the vector nums
dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
A sparse vector is a vector that has mostly zero values, you should store the sparse vector efficiently and compute the dot product between two SparseVector.

Follow up: What if only one of the vectors is sparse?

 

Example 1:
Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
Output: 8
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8

Example 2:
Input: nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]
Output: 0
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0

Example 3:
Input: nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]
Output: 6
 

Constraints:

n == nums1.length == nums2.length
1 <= n <= 10^5
0 <= nums1[i], nums2[i] <= 100
*/

/*
Solution:
- BRUTE FORCE: store as array with 0s, visit every num, multiply by the values, keep a sum, return sum
- OPTIMIZED store vector using an array of [[index, value]] pairs - elminates need to store/visit empty elements, visit only indices with values, multiply and sum, return sum
*/

class SparseVector {
  nums: number[][]
  constructor(nums: number[]) {
    this.nums = nums.reduce((acc: number[][], current, idx) => {
      acc.push([idx, current])
      return acc
    }, [])
  }
  dotProduct(other: SparseVector) {
    let sum = 0
    let l = 0
    let r = 0
    
    while (l < this.nums.length && r < other.nums.length) {
      const [lIndex, lValue] = other.nums[l]
      const [rIndex, rValue] = this.nums[r]
      if (lIndex === rIndex) {
        sum += lValue * rValue
        l += 1
        r += 1
      } 
      while (lIndex < rIndex) {
        l += 1
      }
      while (lIndex > rIndex) {
        r += 1
      }
    }

    return sum
  }
}

let sparseVector = new SparseVector([1,0,0,2,3])
console.log('should be: 8', sparseVector.dotProduct(new SparseVector([0,3,0,4,0])))

sparseVector = new SparseVector([0,1,0,0,0])
console.log('should be: 0', sparseVector.dotProduct(new SparseVector([0,0,0,0,2])))

sparseVector = new SparseVector([0,1,0,0,2,0,0])
console.log('should be: 6', sparseVector.dotProduct(new SparseVector([1,0,0,0,3,0,4])))
