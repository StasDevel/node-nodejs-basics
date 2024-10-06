import process from "process";
import { Transform } from "stream";

const transform = async () => {
  const uppercase = new Transform({
    transform(str, encoding, callback) {
      callback(null, str.toString().trim().split("").reverse().join("") + "\n");
    },
  });
  await process.stdin.pipe(uppercase).pipe(process.stdout);
};

await transform();
