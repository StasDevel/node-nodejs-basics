import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import process from "process";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

  const readStream = fs.createReadStream(pathToFile);
  const stdoutStream = process.stdout;
  readStream.pipe(stdoutStream);
};

await read();
