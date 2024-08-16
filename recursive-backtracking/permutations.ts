// use helper function

function permutations(input: number[]) {
  const result: number[][] = []
  
  function inner(current: number[]) {
    // base case - check for leaf, add result
    if (current.length === input.length) {
      result.push([...current])
      return
    }

    for (let v of input) {
      // ignore seen values
      if (current.indexOf(v) > -1) {
        continue
      }
      // update current result
      current.push(v)
      // recurse with updated current
      inner(current)
      // reset current
      current.pop()
    }
  }
  inner([])
  return result
}

console.log(permutations([1,2,3]))