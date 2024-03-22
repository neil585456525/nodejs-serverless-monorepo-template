import { db } from "../db";
import { eq } from "drizzle-orm";
import { group } from "../schema/group";
import { userToGroup } from "../schema/userToGroup";
import { GroupUserRole } from "global-types";

export class GroupModel {
  async getGroupById(id: number) {
    return db.query.group.findFirst({
      where: eq(group.id, id),
      with: {
        userToGroup: {
          with: {
            user: true,
          },
        },
      },
    });
  }

  async addUserToGroup(userId: number, groupId: number, role: GroupUserRole) {
    return db.insert(userToGroup).values({
      userId,
      groupId,
      userRole: role,
    });
  }
}
