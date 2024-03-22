import { UserModel } from "persistence";

export class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  async getUserInfo(id: number) {
    return this.userModel.getUserById(id);
  }
}
