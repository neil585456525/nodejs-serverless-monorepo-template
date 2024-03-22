import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { RDSDataClient } from "@aws-sdk/client-rds-data";
import { fromIni } from "@aws-sdk/credential-providers";

import * as userSchema from "./schema/user";
import * as groupSchema from "./schema/group";
import * as userToGroupSchema from "./schema/userToGroup";

const rdsClient = new RDSDataClient({
  credentials: fromIni({ profile: process.env["PROFILE"] }),
  region: "us-east-1",
});

export const db = drizzle(rdsClient, {
  database: process.env["DATABASE"]!,
  secretArn: process.env["SECRET_ARN"]!,
  resourceArn: process.env["RESOURCE_ARN"]!,
  schema: {
    ...userSchema,
    ...groupSchema,
    ...userToGroupSchema,
  },
});
