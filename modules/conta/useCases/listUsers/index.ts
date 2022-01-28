import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";



const usersRepository =  UserRepository.getInstance();
const listUsersUseCase = new ListUsersUseCase(usersRepository);
const listUsersControllers = new ListUsersController(listUsersUseCase);


export {listUsersControllers};
