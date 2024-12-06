/*
We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

The box has a present (*) and counts as "inside the box" if:

It is completely surrounded by # on the box's edges.
The * is not on the box's edges.
Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.

Examples:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
*/

// === O(N*M) ====
function inBox1(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i];
    for (let j = 1; j < row.length - 1; j++) {
      if (row[j] === "*") {
        return true;
      }
    }
  }
  return false;
}
// O(N)
function inBox(box) {
  const len = box[0].length;
  let result = "";
  if (box[box.length - 1] !== box[0]) {
    return false;
  }
  for (let i = 1; i < box.length - 1; i++) {
    if (box[i][0] !== "#" || box[i][len - 1] !== "#") {
      return false;
    }
    result += box[i];
  }
  return result.includes("*");
}
console.log(inBox(["###", "#*#", "###"]));
