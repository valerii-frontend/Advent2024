/*
--- Day 4: Ceres Search ---
"Looks like the Chief's not here. Next!" One of The Historians pulls out a device and pushes the only button on it. After a brief flash, you recognize the interior of the Ceres monitoring station!

As the search for the Chief continues, a small Elf who lives on the station tugs on your shirt; she'd like to know if you could help her with her word search (your puzzle input). She only has to find one word: XMAS.

This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words. It's a little unusual, though, as you don't merely need to find one instance of XMAS - you need to find all of them. Here are a few ways XMAS might appear, where irrelevant characters have been replaced with .:


..X...
.SAMX.
.A..A.
XMAS.S
.X....
The actual word search will be full of letters instead. For example:

MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
In this word search, XMAS occurs a total of 18 times; here's the same word search again, but where letters not involved in any XMAS have been replaced with .:

....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX
Take a look at the little Elf's word search. How many times does XMAS appear?
*/

import { parseText } from "../parseText.js";

const data = await parseText(4, "input");

export const grid = data.split("\n").map((line) => line.split(""));

function countXMAS(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const word = "XMAS";
  const wordLen = word.length;
  let count = 0;

  function isWordAt(r, c, dr, dc) {
    for (let i = 0; i < wordLen; i++) {
      const nr = r + i * dr;
      const nc = c + i * dc;
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] !== word[i]) {
        return false;
      }
    }
    return true;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (isWordAt(r, c, 0, 1)) count++;
      if (isWordAt(r, c, 0, -1)) count++;
      if (isWordAt(r, c, 1, 0)) count++;
      if (isWordAt(r, c, -1, 0)) count++;
      if (isWordAt(r, c, 1, 1)) count++;
      if (isWordAt(r, c, -1, -1)) count++;
      if (isWordAt(r, c, 1, -1)) count++;
      if (isWordAt(r, c, -1, 1)) count++;
    }
  }

  return count;
}

console.log(countXMAS(grid)); //2464
