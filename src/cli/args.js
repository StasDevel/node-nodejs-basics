import process from "process";

const parseArgs = () => {
  const listOfArgs = process.argv;
  let result = "";
  listOfArgs.map((elem, index) => {
    if (elem.startsWith("--")) {
      result += ` ${elem.replace("--", "")} is ${listOfArgs[index + 1]},`;
    }
  });
  console.log(result.trim());
};

parseArgs();
