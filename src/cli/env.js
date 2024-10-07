import process from "process";

const parseEnv = () => {
  const listOfVariables = process.env;
  let result = "";
  for (let elem in listOfVariables) {
    if (elem.startsWith("RSS_")) {
      result += ` ${elem}=${listOfVariables[elem]};`;
    }
  }
  console.log(result.trim());
};

parseEnv();
