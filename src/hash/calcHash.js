import fs from "fs";
import crypto from "crypto";
import process from "process";
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const file = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256");
  hash.setEncoding("hex");

  const readStream = fs.createReadStream(file);
  readStream.on("data", (data) => {
    hash.update(data);
  });
  readStream.on("end", () => {
    process.stdout.write(hash.digest("hex"));
  });
};

await calculateHash();
