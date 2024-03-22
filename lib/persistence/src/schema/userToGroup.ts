import { pgTable, pgEnum, integer, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { group } from "./group";
import { user } from "./user";
import { groupUserRoleValues } from "global-types";

export const userRoleEnum = pgEnum("user_role", groupUserRoleValues);

export const userToGroup = pgTable(
  "user_to_group",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => user.id),
    groupId: integer("group_id")
      .notNull()
      .references(() => group.id),
    userRole: userRoleEnum("user_role").notNull().default("member"),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.groupId] }),
  })
);

export const userToGroupRelations = relations(userToGroup, ({ one }) => ({
  group: one(group, {
    fields: [userToGroup.groupId],
    references: [group.id],
  }),
  user: one(user, {
    fields: [userToGroup.userId],
    references: [user.id],
  }),
}));
