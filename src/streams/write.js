import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import process from "process";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

  const stdinStream = process.stdin;
  const writableStream = fs.createWriteStream(pathToFile);
  //   stdinStream.pipe(writableStream);
  stdinStream.pipe(writableStream);
};

await write();
