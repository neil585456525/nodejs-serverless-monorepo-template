// get all the json files under the directory, get all of the id value inside and put in the array
import { readFileSync } from "fs";
//@ts-ignore
import glob from "glob";

const schemaFiles: string[] = glob.sync(
  "../../resources/dynamodb/connector-type/*.json"
);
const schemaIds = schemaFiles.map((file) => {
  const schema = JSON.parse(readFileSync(file, "utf8"));
  return schema.id;
});
console.log(schemaIds);
