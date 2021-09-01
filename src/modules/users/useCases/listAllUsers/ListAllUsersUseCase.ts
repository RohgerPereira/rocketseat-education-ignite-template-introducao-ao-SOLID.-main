import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const idAlreadyExists = this.usersRepository.findById(user_id);
    if (!idAlreadyExists.admin || !idAlreadyExists) {
      throw new Error(
        "User without permission for this action, or does not exists!"
      );
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
