import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { userToGroup } from "./userToGroup";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  email: varchar("email", { length: 256 }),
});

export const userRelations = relations(user, ({ many }) => ({
  userToGroup: many(userToGroup),
}));
