 import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";
import {UserRepository} from "../../repositories/implementations/UserRepository";


const userRepository =  UserRepository.getInstance();

const getUserUseCase =  new GetUserUseCase(userRepository);
const getUserController = new GetUserController(getUserUseCase);


export {getUserController  };

 

