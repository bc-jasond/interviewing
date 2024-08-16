/*
https://leetcode.com/problems/k-closest-points-to-origin/description/
973. K Closest Points to Origin
Solved
Medium
Topics
Companies
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

 

Example 1:


Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 

Constraints:

1 <= k <= points.length <= 104
-104 <= xi, yi <= 104

n + n log n + k log n = O(n + k logn). 

O(n + logk)

Question:
    - are there at least k points in the input?

Solution:
    - visit each point array, calculate Euclidean distance from center
    - use a Max heap of size K
    - add pair to heap
    - if heap > k, popMax()
    - the top of the heap will be the Kth closest point, all points in heap will be closer

*/

function kClosest(points: number[][], k: number): number[][] {
  function getDistance(x: number, y: number) {
      // distance from 0,0
      return Math.sqrt(Math.pow(0 - x, 2) + Math.pow(0 - y, 2))
  }
  const maxHeap = new MaxHeap<number[]>((a: number[], b: number[]) => getDistance(a[0], a[1]) > getDistance(b[0],b[1]))
  
  for (let i = 0; i < points.length; i += 1) {
      const current = points[i]
      maxHeap.insert(current)
      if (maxHeap.size() > k) {
          maxHeap.extractMax()
      }
  }

  return maxHeap.heap
};