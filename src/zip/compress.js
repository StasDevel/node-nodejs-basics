// const { pipeline } = require("node:stream/promises");
import { pipeline } from "stream/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";
import fs from "fs";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileUrl = path.join(__dirname, "files", "fileToCompress.txt");
  const fileWriteIn = path.join(__dirname, "files", "archive.gz");
  console.log(fileUrl);

  const gzip = createGzip();
  const source = fs.createReadStream(fileUrl);
  const destination = fs.createWriteStream(fileWriteIn);
  await pipeline(source, gzip, destination);

  //   do_gzip("input.txt", "input.txt.gz").catch((err) => {
  //     console.error("An error occurred:", err);
  //     process.exitCode = 1;
  //   });
};

await compress();
