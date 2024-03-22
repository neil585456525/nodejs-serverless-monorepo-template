import { db } from "../db";
import { user } from "../schema/user";
import { eq } from "drizzle-orm";

export class UserModel {
  async getUserById(id: number) {
    return db.query.user.findFirst({
      where: eq(user.id, id),
      with: {
        userToGroup: {
          with: {
            group: true,
          },
        },
      },
    });
  }
}
