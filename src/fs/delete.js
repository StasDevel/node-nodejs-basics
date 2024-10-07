import fsPromise from "fs/promises";
import fs from "fs";
import path from "path";
import __dirname from "../dirname.js";

const remove = async (filename) => {
  const url = path.join(__dirname, "fs", "files", filename);

  try {
    await fsPromise.access(url, fs.constants.F_OK);
    fsPromise.rm(url);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove("fileToRemove.txt");
