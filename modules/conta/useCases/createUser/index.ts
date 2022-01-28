import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import {UserRepository} from "../../repositories/implementations/UserRepository";


const userRepository =  UserRepository.getInstance();

const createUserUseCase =  new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);


export {createUserController };



