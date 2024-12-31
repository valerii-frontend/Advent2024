/*
The day to give out gifts is approaching! We need to stack the gifts we will transport on the sleigh 🛷, and for that, we are going to put them in boxes 📦.

The gifts can be placed in 4 different boxes, where each box can hold weights of 1, 2, 5, and 10, represented as follows:

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|

_________
10: |         |
    |_________|

// JavaScript representation:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
Your mission is, upon receiving the weight of the gifts, to use the fewest boxes possible and also stack them from less weight (top) to more weight (bottom). Always aligned to the left.

Additionally, keep in mind that when stacking them, the lower edge of the box is reused.

distributeWeight(1)
// Returns:
//  _
// |_|

distributeWeight(2)
// Returns:
//  ___
// |___|

distributeWeight(3)
// Returns:
//  _
// |_|_
// |___|

distributeWeight(4)
// Returns:
//  ___
// |___|
// |___|

distributeWeight(5)
// Returns:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Returns:
//  _
// |_|___
// |     |
// |_____|
Note: Be careful with the white spaces! Do not add whitespace to the right of a box unless necessary.


*/

function distributeWeight(weight) {
  const boxViews = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };
  const sizes = [10, 5, 2, 1];
  let size = sizes.find((size) => size <= weight);
  let prevSize = size;
  const boxes = [boxViews[size].join("\n")];

  while ((weight -= size)) {
    size = sizes.find((size) => size <= weight);
    const peek = boxViews[size].at(-1);

    let rest = boxes[0].slice(peek.length).replace(size == prevSize ? "" : " ", "");

    boxes[0] = peek + rest;
    boxes.unshift(boxViews[size].slice(0, -1).join("\n"));
    prevSize = size;
  }

  return boxes.join("\n");
}
