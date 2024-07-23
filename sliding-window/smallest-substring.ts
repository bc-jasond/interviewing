/*
find the shortest substring of a given string s that contains exactly three unique characters.


# Example 1
s = "abcabc"
# The shortest substring with 3 unique characters is "abc"
print(shortest_with_3_unique(s))  # Output: "abc"

# Example 2
s = "aaabbbccc"
# The shortest substring with 3 unique characters is "abbbc"
print(shortest_with_3_unique(s))  # Output: "abbbc"

# Example 4
s = "aabbcc"
# The shortest substring with 3 unique characters is "abbc"
print(shortest_with_3_unique(s))  # Output: "abbc"

# Example 5
s = "aaaaa"
# There is no substring with 3 unique characters, so the output is an empty string
print(shortest_with_3_unique(s))  # Output: ""

*/


/*
   Questions:
      1. Any runtime consideration? No
      2. Any assumption on the characters? Only lower case alphabetical


   Solution:
      - Exhustive search: Generate all possible substrings. Find the ones that have 3 unique characters.  Return the shortest.
      - 

      - Optimal Solution: Sliding window approach

*/

function shortestWith3Unique(s: string) {
  /* BRUTE FORCE
  const allSubstrings: string[] = []
  let j = 0
  for (let i = 0; i < s.length; i += 1) {
    j = i
    while (j <= s.length) {
      j += 1
      allSubstrings.push(s.slice(i, j))
    }
  }
  let shortest = ''
  for (const substr of allSubstrings) {
    const uniques = new Set(substr.split(''))
    if (uniques.size >= 3 && (shortest === '' || substr.length < shortest.length)) {
      shortest = substr
    }
  }
  console.log(shortest)
  */
  // return shortest
}

shortestWith3Unique("abcabc")
shortestWith3Unique("aaabbbccc")
shortestWith3Unique("aabbcc")
shortestWith3Unique("aaaaa")