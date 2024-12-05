/*
--- Part Two ---
The Elf looks quizzically at you. Did you misunderstand the assignment?

Looking for the instructions, you flip over the word search to find that this isn't actually an XMAS puzzle; it's an X-MAS puzzle in which you're supposed to find two MAS in the shape of an X. One way to achieve that is like this:

M.S
.A.
M.S
Irrelevant characters have again been replaced with . in the above diagram. Within the X, each MAS can be written forwards or backwards.

Here's the same example from before, but this time all of the X-MASes have been kept instead:

.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........
In this example, an X-MAS appears 9 times.

Flip the word search from the instructions back over to the word search side and try again. How many times does an X-MAS appear?
*/

import { grid } from "./advent_of_code_4_1.js";

function countXMASPatterns(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // Helper to check if a sequence matches MAS in forward or backward order
  function isMAS(r, c, dr, dc) {
    if (r >= 0 && r + 2 * dr < rows && c >= 0 && c + 2 * dc < cols) {
      const seq = [grid[r][c], grid[r + dr][c + dc], grid[r + 2 * dr][c + 2 * dc]].join("");
      return seq === "MAS" || seq === "SAM";
    }
    return false;
  }

  // Iterate through each cell as the center of the X-MAS
  for (let r = 0; r < rows - 2; r++) {
    for (let c = 1; c < cols - 1; c++) {
      // Check for the X-MAS pattern
      if (
        isMAS(r, c - 1, 1, 1) && // Top-left to bottom-right
        isMAS(r, c + 1, 1, -1) // Top-right to bottom-left
      ) {
        count++;
      }
    }
  }

  return count;
}

console.log(countXMASPatterns(grid)); // 1982
