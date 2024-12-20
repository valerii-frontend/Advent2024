/*
ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on an application for managing gifts and children.

To enhance the presentation, he wants to create a function drawTable that receives an array of objects and converts it into a text table.

The drawn table should represent the object data as follows:

It has a header with the column name.
The column name has the first letter capitalized.
Each row should contain the values of the objects in the corresponding order.
Each value must be left-aligned.
Fields always leave a space on the left.
Fields leave the necessary space on the right to align the box.
Look at the example to see how you should draw the table:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
*/
function drawTable(data) {
  const keys = Object.keys(data[0]);
  const headers = keys.map((key) => key.charAt(0).toUpperCase() + key.slice(1));

  const lengths = {};
  for (let key of keys) {
    lengths[key] = key.length;

    for (let i = 0; i < data.length; i++) {
      const length = String(data[i][key]).length;
      if (length > lengths[key]) lengths[key] = length;
    }
  }
  const withBorders = (s) => "| " + s.join(" | ") + " |";

  const border = `+-${keys.map((key) => "-".repeat(lengths[key])).join("-+-")}-+`;
  const tableHead = withBorders(keys.map((key, i) => headers[i].padEnd(lengths[key])));

  const table = [border, tableHead, border];

  for (const row of data) {
    const content = keys.map((key) => ("" + row[key]).padEnd(lengths[key]));
    table.push(withBorders(content));
  }
  table.push(border);
  return table.join("\n");
}
