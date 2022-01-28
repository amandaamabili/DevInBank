import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import {UserRepository} from "../../repositories/implementations/UserRepository";


const userRepository =  UserRepository.getInstance();

const updateUserUseCase =  new UpdateUserUseCase(userRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);


export {updateUserController};
