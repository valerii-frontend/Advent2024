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
  if (!data || data.length === 0) {
    return "";
  }

  const headers = Object.keys(data[0]);
  const capitalizedHeaders = headers.map((header) => header[0].toUpperCase() + header.slice(1));
  const columnWidths = headers.map((header) => {
    return Math.max(header.length, ...data.map((row) => String(row[header]).length));
  });
  const pad = (str, width) => str + " ".repeat(width - str.length);
  const separator = "+" + columnWidths.map((width) => "-".repeat(width + 2)).join("+") + "+";
  const headerRow = "| " + capitalizedHeaders.map((header, i) => pad(header, columnWidths[i])).join(" | ") + " |";
  const dataRows = data.map((row) => {
    return "| " + headers.map((header, i) => pad(String(row[header]), columnWidths[i])).join(" | ") + " |";
  });

  return [separator, headerRow, separator, ...dataRows, separator].join("\n");
}

// Example usage
console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);
