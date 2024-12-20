/*
The elves are working hard to clear paths filled with magical snow ❄️. This snow has a special property: if two identical and adjacent snow piles are found, they disappear automatically.

Your task is to write a function to help the elves simulate this process. The path is represented by a string and each snow pile by a character.

You need to remove all adjacent snow piles that are the same until no more moves are possible.

The result should be the final path after removing all duplicate piles:

removeSnow('zxxzoz') // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

removeSnow('abcdd') // -> "abc"
// 1. Remove "dd", resulting in "abc"

removeSnow('zzz') // -> "z"
// 1. Remove "zz", resulting in "z"

removeSnow('a') // -> "a"
// No duplicate piles
*/

/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  const stack = [];

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
console.log(removeSnow("abcdd")); // -> "abc"
