import { User } from "../../model/Users";
import { UserRepository } from "../../repositories/implementations/UserRepository";



class ListUsersUseCase{
    constructor(private userRepository: UserRepository){

    }
    execute(): User[]{
        const users = this.userRepository.list();
        return users;
    }
}

export {ListUsersUseCase};