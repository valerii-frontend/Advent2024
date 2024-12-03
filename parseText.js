import fs from "fs";

export const parseText = async (day, file) => {
  try {
    const filePath = `day${day}/${file}.txt`;
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
