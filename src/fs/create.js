import fsPromise from "fs/promises";
import fs from "fs";
import path from "path";
import __dirname from "../dirname.js";

const create = async (filename) => {
  const url = path.join(__dirname, "fs", "files", filename);
  try {
    await fsPromise.access(url, fs.constants.F_OK);
  } catch (err) {
    const writeableStream = fs.createWriteStream("./files/fresh.txt");
    writeableStream.end("I am fresh and young");
    return;
  }
  throw new Error("FS operation failed");
};

await create("fresh.txt");
