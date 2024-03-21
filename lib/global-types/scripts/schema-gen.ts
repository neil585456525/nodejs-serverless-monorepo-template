import { resolve } from "path";
import { writeFileSync, existsSync, mkdirSync, rmSync } from "fs";

import * as TJS from "typescript-json-schema";

// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
  required: true,
};

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
  strictNullChecks: true,
  skipLibCheck: true,
};

const program = TJS.getProgramFromFiles(
  [resolve("src/DeviceType.ts")],
  compilerOptions
);

// We can either get the schema for one file and one type...
const schema = TJS.generateSchema(program, "IDeviceType", settings);

const dir = "./__generated__/schema";
if (existsSync(dir)) {
  rmSync(dir, { recursive: true });
}
mkdirSync(dir, { recursive: true });

// create json file with schema
writeFileSync(
  dir + "/DeviceType.schema.json",
  JSON.stringify(schema, null, 2),
  {
    flag: "wx",
  }
);
