function solve(eq: (string | number)[]): number {
  let result = parseInt(`${eq[0]}`) || 0
  for (let i = 1; i < eq.length; i += 1) {
      const current = eq[i] 
      const next = eq[i + 1]
      if (current === '+') {
          //@ts-ignore
          result += parseInt(`${next}`)
          i += 1
      } else if (current === '-') {
          //@ts-ignore
          result -= parseInt(`${next}`)
          i += 1
      }
  }
  return result
}
function calculate(s: string): number {
  const equations: (string | number)[][] = [s.split('')]
  let currentIndex: number = 0
  
  while (equations.length) {
    //@ts-ignore
      const currentEquation = equations.pop() as (string | number)[]
      for (let i = currentIndex; i < currentEquation.length; i += 1) {
          const char = currentEquation[i] as string
          if (char === '(') {
              // push current equation back onto stack
              equations.push([i + 1, ...currentEquation.slice(0, i)])
              // push rest of current equation into new spot on stack, skip i aka '('
              equations.push([0, ...currentEquation.slice(i + 1)])
              break;
          }
          if (char === ')') {
              const currentEquationResult = solve(currentEquation.slice(0, i))
              equations.push([i + 2, currentEquationResult, ...currentEquation.slice(i + 1)])
              break;
          }
          if ('+-0123456789'.includes(char)) {
              currentEquation.push(char)
          }
          // const num = parseInt(char)
          // if (Number.isInteger(num)) {
          //     // assume single digit numbers only?
          //     //const currentEquation = equation[equations.length - 1]
          //     //const last = currentEquation[currentEquation.length - 1]
          //     equation[equations.length - 1].push(num)
          // }
          // space, ignore
      }
      // assume end of expression given constraints
      
  }
  return solve(currentEquation)
};

console.log(calculate('(1+(4+5+2)-3)+(6+8)'))