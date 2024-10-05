import fs from "fs";
import path from "path";
import __dirname from "../dirname.js";

const read = async (filename) => {
  const url = path.join(__dirname, "fs", "files", filename);
  let fileContent = "";
  const readStream = fs.createReadStream(url);
  readStream.on("data", (data) => {
    fileContent += data;
  });
  readStream.on("end", () => {
    console.log(fileContent);
  });
};

await read("fileToRead.txt");
