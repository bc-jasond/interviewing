/*
https://leetcode.com/problems/basic-calculator/description/

224. Basic Calculator
Hard
Topics
Companies
Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
 

Constraints:

1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
'+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
'-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
There will be no two consecutive operators in the input.
Every number and running calculation will fit in a signed 32-bit integer.
*/

function calculate(s: string): number {
    const Plus = '+'
    const Minus = '-'
    const Open = '('
    const Close = '('

    let expressions = []
    let operators = []
    let currentExpressionValue = 0
    let lastChar
    // remove whitespaces
    const sClean = s.split('').filter(c => c !== ' ')

    for (let i = 0; i < sClean.length; i += 1) {
      if (c === Open) {
        // push a new expression
        currentExpressionValue = 0
        expressions.push(currentExpressionValue)
      }
      if (c === Close) {
        // pop expression
        // apply its value to the new currentExpression using lastOperator
      }
      if (c === Minus) {
        // unary or subtraction?
        operators.push(c)
      }
      if (c === Plus) {
        operators.push(c)
      }
      const maybeNumber = parseInt(c)
      if (Number.isInteger(maybeNumber)) {
        // concat number?
        if (Number.isInteger(lastChar)) {
          lastChar = c
        }
        // apply c to current expression
        let currentOperator = operators[expressions.length - 1]
        if (!currentOperator)
      }
    }
  
    return expressions.pop()
};