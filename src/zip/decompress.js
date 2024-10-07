import path from "path";
import { fileURLToPath } from "url";
import { unzip } from "zlib";
import fs from "fs";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const readStream = fs.createReadStream(
    path.join(__dirname, "files", "archive.gz")
  );
  const bufferArray = [];
  readStream.on("data", (data) => {
    bufferArray.push(data);
  });
  readStream.on("end", () => {
    let buffer = Buffer.concat(bufferArray);

    unzip(buffer, (err, buffer) => {
      if (err) {
        console.error("Произошла ошибка:", err);
        process.exitCode = 1;
      }
      const writableStream = fs.createWriteStream(
        path.join(__dirname, "files", "fileToCompress.txt")
      );
      writableStream.write(buffer.toString());
    });
  });
};

await decompress();
