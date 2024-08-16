/* shortest path to visit all cities only once (return to orignal city)*/
function tsp(startCity: number, weights: number[][]) {
  
  let minPath: number[] = []
  let minCost = Number.MAX_SAFE_INTEGER
  function inner(currentNode: number, currentCost: number, currentPath: number[]) {
    if (currentPath.length === weights.length) {
      const finalCost = currentCost + weights[currentNode][startCity]
      if (finalCost < minCost) {
        minCost = finalCost
        minPath = currentPath
      }
      return
    }
    if (currentCost > minCost) {
      return
    }
    for (let i = 0; i < weights.length; i += 1) {
      if (currentPath.includes(i)) {
        continue
      }
      currentPath.push(i)
      inner(i, currentCost + weights[currentNode][i], [...currentPath])
      currentPath.pop()
    }
  }
  inner(startCity, 0, [startCity])
  console.log('min path', minPath)
  return minCost
}
console.log(tsp(0, [
  [0,40,20,35],
  [40,0,30,10],
  [20,30,0,30],
  [35,10,30,0]
]))