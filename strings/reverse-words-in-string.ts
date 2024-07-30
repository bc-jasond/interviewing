/*
https://leetcode.com/problems/reverse-words-in-a-string/description/

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 

Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?
*/

/*
  Questions:

  Solution:
   - BRUTE FORCE - use recursion to concatenate words to a new string starting from the end
*/

function reverseWords(s: string): string {
  let result = ''
  function inner(str: string) {
    let lastWord = ''
    let idx = str.length - 1
    while (idx >= 0) {
      const current = str[idx]
      idx -= 1
      if (current === ' ') {
        if (!lastWord) {
          // haven't hit a new word yet
          continue
        }
        // end of current word
        break
      }
      lastWord = current + lastWord
    }
    
    if (lastWord) {
      if (result.length) {
        result += ' '
      }
      result += lastWord
    }
    if (idx > -1) {
      inner(str.slice(0, idx + 1))
    }
  }
  inner(s)
  return result
}

console.log(reverseWords('abc def ghijk'))
console.log(reverseWords('   hello      world   '))