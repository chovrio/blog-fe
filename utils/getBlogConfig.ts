import fs from "fs";
import yaml from "js-yaml";
const content = fs.readFileSync( "@/blog.yaml", {
  encoding: "utf-8",
});
const result = yaml.load(content);
console.log(JSON.stringify(result, null, 2));

export default result;
