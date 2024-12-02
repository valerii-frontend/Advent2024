import fs from "fs";

export const parseInput = async () => {
  try {
    const filePath = "day2/input.txt";
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    const data = fs.readFileSync(filePath, "utf-8");
    return data;
  } catch (error) {
    console.error(`Error reading data: ${error.message}`);
    throw error;
  }
};

export const getReports = (data) => {
  const mappedReports = data.split("\n").map((line) => {
    return line.split(" ").map((num) => +num);
  });
  return mappedReports;
};
