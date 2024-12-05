/*
It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

The function should return a string that represents the Christmas tree, constructed as follows:

The tree is made up of triangles of special characters.
The spaces on the sides of the tree are represented with underscores _.
All trees have a trunk of two lines, represented by the # character.
The tree should always have the same length on each side.
You must ensure the tree has the correct shape using line breaks \n for each line.
Examples:

const tree = createXmasTree(5, '*')
console.log(tree)

____*____
___***___
__*****__
_*******_
*********
____#____
____#____


const tree2 = createXmasTree(3, '+')
console.log(tree2)

__+__
_+++_
+++++
__#__
__#__


const tree3 = createXmasTree(6, '@')
console.log(tree3)

_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____

Make sure to use line breaks \n at the end of each line, except for the last one.
*/

function createXmasTree(height, ornament) {
  const width = height * 2 - 1;
  let tree = "";

  for (let row = 1; row <= width; row += 2) {
    const space = (width - row) / 2;
    tree += "_".repeat(space) + ornament.repeat(row) + "_".repeat(space) + "\n";
  }
  const s = (width - 1) / 2;
  tree += "_".repeat(s) + "#" + "_".repeat(s) + "\n" + "_".repeat(s) + "#" + "_".repeat(s);
  return tree;
}

function createXmasTree(height, ornament) {
  const width = height * 2 - 1;
  let tree = "";

  for (let row = 1; row <= width; row += 2) {
    tree += "_".repeat(Math.floor((width - row) / 2));
    tree += ornament.repeat(row);
    tree += "_".repeat(Math.floor((width - row) / 2));
    tree += "\n";
  }

  tree += "_".repeat((width - 1) / 2);
  tree += "#";
  tree += "_".repeat((width - 1) / 2) + "\n";
  tree += "_".repeat((width - 1) / 2);
  tree += "#";
  tree += "_".repeat((width - 1) / 2);
  return tree;
}
