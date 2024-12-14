/*
The elves at the North Pole have created a special robot 🤖 that helps Santa Claus distribute gifts inside a large warehouse. The robot moves on a 2D plane and we start from the origin (0, 0).

We want to know if, after executing a series of movements, the robot returns to exactly where it started.

The robot's basic commands are:

L: Move to the left
R: Move to the right
U: Move upwards
D: Move downwards
But it also has certain modifiers for the movements:

*: The movement is done with double intensity (e.g., *R means RR)
!: The next movement is inverted (e.g., R!L is considered as RR)
?: The next movement is done only if it hasn't been done before (e.g., R?R means R)
Note: When the movement is inverted with ! the inverted movement is counted and not the original one. For example, !U?U inverts the U movement, so it counts as having done the D movement but not the U. Thus, !U?U translates to D?U, and therefore, the final U movement is done.

You must return:

true: if the robot returns exactly to where it started
[x, y]: if the robot does not return to where it started, return the position where it stopped
isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Step-by-step examples:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> moves to the right
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done
*/

/**
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */

function isRobotBack(moves) {
  const position = { x: 0, y: 0 };
  const commands = {
    L: { x: -1, y: 0, invert: "R" },
    R: { x: 1, y: 0, invert: "L" },
    U: { x: 0, y: 1, invert: "D" },
    D: { x: 0, y: -1, invert: "U" },
  };
  const visited = new Set();
  const newMoves = [];
  let i = 0;

  while (i < moves.length) {
    const command = moves[i];
    const nextCommand = moves[i + 1];
    if (commands[command]) {
      newMoves.push(command);
      visited.add(command);
      i++;
      continue;
    }
    if (command === "!") {
      newMoves.push(commands[nextCommand].invert);
      visited.add(commands[nextCommand].invert);
    } else if (command === "?") {
      if (!visited.has(nextCommand)) {
        newMoves.push(nextCommand);
        visited.add(nextCommand);
      }
    } else if (command === "*") {
      newMoves.push(nextCommand, nextCommand);
      visited.add(nextCommand);
    }
    i += 2;
  }
  for (let move of newMoves) {
    position.x += commands[move].x;
    position.y += commands[move].y;
  }
  const { x, y } = position;
  return (!x && !y) || [x, y];
}
