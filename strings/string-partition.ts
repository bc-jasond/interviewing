/*
https://leetcode.com/problems/partition-labels/description/

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

 

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]
 

Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.
*/

/*
Solution:
- visit all chars in string
- keep "last" position of each char in a map
- iterate i through all chars, keeping greatest "last", if i >= "last" store current partition length
*/

function partitionLabels(s: string): number[] {
  const lastPositions: Record<string, number> = {}
  const partitions: number[] = []
  // init last positions
  for (let i = 0; i < s.length; i += 1) {
      lastPositions[s[i]] = i
  }
  let maxLastSoFar = 0
  let currentSize = 0
  for (let i = 0; i < s.length; i += 1) {
      currentSize += 1
      const last = lastPositions[s[i]]
      maxLastSoFar = Math.max(maxLastSoFar, last)
      if (i >= maxLastSoFar) {
          partitions.push(currentSize)
          currentSize = 0
      }
  }
  return partitions
};