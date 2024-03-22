import { UserModel, GroupModel } from "persistence";
import { NotFoundException, ValidationException } from "utils/exception";
import { GroupUserRole } from "global-types";

export class GroupService {
  private userModel: UserModel;
  private groupModel: GroupModel;

  constructor() {
    this.userModel = new UserModel();
    this.groupModel = new GroupModel();
  }

  async addUserToGroup(userId: number, groupId: number, role: GroupUserRole) {
    const [user, group] = await Promise.all([
      this.userModel.getUserById(userId),
      this.groupModel.getGroupById(groupId),
    ]);

    if (!user) {
      throw new NotFoundException("User not found");
    }
    if (!group) {
      throw new NotFoundException("Group not found");
    }
    if (group.userToGroup.some((u) => u.userId === userId)) {
      throw new ValidationException("User already in group");
    }

    if (
      role === GroupUserRole.ADMIN &&
      group.userToGroup.some((u) => u.userRole === GroupUserRole.ADMIN)
    ) {
      throw new ValidationException("Group already has an admin");
    }

    await this.groupModel.addUserToGroup(
      userId,
      groupId,
      role as GroupUserRole
    );
  }
}
