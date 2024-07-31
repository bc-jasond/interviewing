/*
https://leetcode.com/problems/merge-intervals/description/

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/*

Solution:
  - sort the input, visit every interval, keep track of previous interval, merge intervals while next[0] < last[1], return array of merged intervals

  O(n + nlogn) = O(nlogn)

*/

function merge(intervals: number[][]): number[][] {
  let prev
  const results = []
  intervals.sort((a,b) => a[0] < b[0] ? -1 : 1)
  for (let i = 0; i < intervals.length; i += 1) {
      const current = intervals[i]
      if (prev && current[0] <= prev[1] && current[1] >= prev[0]) {
          prev[1] = Math.max(prev[1], current[1])
          prev[0] = Math.min(prev[0], current[0])
          continue
      }
      if (prev) {
          results.push(prev)
      }
      prev = current
  }
  if (prev) {
      results.push(prev)
  }
  return results
};