import fsPromise from "fs/promises";
import fs from "fs";
import path from "path";
import __dirname from "../dirname.js";

const rename = async () => {
  const url = path.join(__dirname, "fs", "files", "wrongFilename.txt");
  fsPromise.access(url, fs.constants.F_OK).then(() => {
    fsPromise.rename(
      path.join(__dirname, "fs", "files", "wrongFilename.txt"),
      path.join(__dirname, "fs", "files", "properFilename.md")
    );
  });
};

await rename();
