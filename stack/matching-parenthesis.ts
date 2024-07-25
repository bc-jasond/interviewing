/*
https://leetcode.com/problems/valid-parentheses/description/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/*
Questions:
 - can they be nested?

Solution:
 - visit all input chars, if we see an opening bracket add it to a stack, if we see a closing bracket make sure it matches the last opener, make sure there are no open brackets left unclosed
*/
function isValid(s: string): boolean {
  const openers = '({['
  const closers = ')}]'
  const stack = []
  for (let i = 0; i < s.length; i += 1) {
      const currentChar = s[i]
      if (openers.includes(currentChar)) {
          stack.push(currentChar)
      }
      if (closers.includes(currentChar)) {
          const lastOpener = stack.pop() || ''
          if (openers.indexOf(lastOpener) !== closers.indexOf(currentChar)) {
              return false
          }
      }
  }
  return stack.length === 0
};
