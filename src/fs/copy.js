import fsPromise from "fs/promises";
import fs from "fs";
import path from "path";
import __dirname from "../dirname.js";

const copy = async () => {
  const url = path.join(__dirname, "fs", "files");
  const newUrl = path.join(__dirname, "fs", "copy_files");

  fsPromise
    .access(url, fs.constants.F_OK)
    .then(async () => {
      await fsPromise.mkdir(newUrl);
      const listOfFiles = await fsPromise.readdir(url);
      listOfFiles.map((elem) => {
        const readStream = fs.createReadStream(
          path.join(__dirname, "fs", "files", elem)
        );
        const writeStream = fs.createWriteStream(
          path.join(__dirname, "fs", "copy_files", elem)
        );
        readStream.pipe(writeStream);
      });
    })
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await copy();
