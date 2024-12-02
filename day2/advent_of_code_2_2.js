/*
--- Part Two ---
The engineers are surprised by the low number of safe reports until they realize they forgot to tell you about the Problem Dampener.

The Problem Dampener is a reactor-mounted module that lets the reactor safety systems tolerate a single bad level in what would otherwise be a safe report. It's like the bad level never happened!

Now, the same rules apply as before, except if removing a single level from an unsafe report would make it safe, the report instead counts as safe.

More of the above example's reports are now safe:

7 6 4 2 1: Safe without removing any level.
1 2 7 8 9: Unsafe regardless of which level is removed.
9 7 6 2 1: Unsafe regardless of which level is removed.
1 3 2 4 5: Safe by removing the second level, 3.
8 6 4 4 1: Safe by removing the third level, 4.
1 3 6 7 9: Safe without removing any level.
Thanks to the Problem Dampener, 4 reports are actually safe!

Update your analysis by handling situations where the Problem Dampener can remove a single level from unsafe reports. How many reports are now safe?


*/

import { parseInput, getReports } from "./helpers.js";

const data = await parseInput();

const reports = getReports(data);

function countSafeReports(input) {
  let safeCount = 0;
  for (const report of input) {
    if (isSafe(report)) {
      safeCount++;
    } else {
      for (let i = 0; i < report.length; i++) {
        const reportCopy = [...report];
        reportCopy.splice(i, 1);
        if (isSafe(reportCopy)) {
          safeCount++;
          break;
        }
      }
    }
  }

  return safeCount;
}

function isSafe(report) {
  if (report.length < 2) {
    return true;
  }

  const firstDiff = report[1] - report[0];

  if (firstDiff === 0 || Math.abs(firstDiff) > 3) {
    return false;
  }

  const expectedSign = Math.sign(firstDiff); // Determine if the sequence is increasing or decreasing

  for (let i = 1; i < report.length - 1; i++) {
    const diff = report[i + 1] - report[i];
    if (diff === 0 || Math.abs(diff) > 3) {
      return false;
    }

    const sign = Math.sign(diff);
    if (sign !== expectedSign) {
      return false;
    }
  }

  return true;
}

const safeReports = countSafeReports(reports);
console.log(safeReports); // 528
