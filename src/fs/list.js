import fsPromise from "fs/promises";
import path from "path";
import __dirname from "../dirname.js";

const list = async () => {
  const url = path.join(__dirname, "fs", "files");
  fsPromise
    .readdir(url)
    .then((res) => console.log(res))
    .catch(() => {
      throw new Error("FS operation failed");
    });
};

await list();
