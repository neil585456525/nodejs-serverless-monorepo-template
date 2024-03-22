import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { userToGroup } from "./userToGroup";

export const group = pgTable("group", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: varchar("description", { length: 256 }),
});

export const groupRelations = relations(group, ({ many }) => ({
  userToGroup: many(userToGroup),
}));
