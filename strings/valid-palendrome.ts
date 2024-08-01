/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/*
  Solution:
  - start a pointer at the beginning and at the end, increment both toward the middle, if they reach each other return true 
  - use strings of acceptable chars instead of regex to replace them
*/

function isPalindrome(s: string): boolean {
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowers = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const getChar = (c: string) => {
    if (lowers.indexOf(c) > -1 || numbers.indexOf(c) > -1) {
        return c
    }
    const uppersIndex = uppers.indexOf(c)
    if (uppersIndex > -1) {
        return lowers[uppersIndex]
    }
    return undefined
  }
  let l = 0
  let lCurrent
  let r = s.length - 1
  let rCurrent
  while (l < r) {
      lCurrent = getChar(s[l])
      while (l < r && lCurrent === undefined) {
          l += 1
          lCurrent = getChar(s[l])
      }
      rCurrent = getChar(s[r])
      while (l < r && rCurrent === undefined) {
          r -= 1
          rCurrent = getChar(s[r])
      }
      if (lCurrent !== rCurrent) {
          return false
      }
      l += 1
      r -= 1
  }
  return true
};