function permutationsWithDuplicates(input: number[]) {
  const result: number[][] = []
  function inner(current: number[], seen: boolean[]) {
    if (current.length === input.length) {
      result.push([...current])
      return
    }
    for (let i = 0; i < input.length; i += 1) {
      if (seen[i]) {
        continue
      }
      // avoid duplicates - if any previous input value duplicates are not marked seen, they can be ignored
      const seenDuplicatesIndices = input.slice(0, i).reduce((acc: number[], val, idx) => {
        if (val === input[i]) {
          acc.push(idx)
        }
        return acc
      }, [])
      if (seenDuplicatesIndices.some(idx => !seen[idx])) {
         continue
      }
      seen[i] = true
      current.push(input[i])

      inner(current, seen)

      seen[i] = false
      current.pop()
    }
  }
  inner([], [])
  return result
}

console.log(permutationsWithDuplicates([1,1,1,3,1]))