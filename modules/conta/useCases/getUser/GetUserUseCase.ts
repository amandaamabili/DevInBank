
import { request } from 'express';
import { UserMap } from '../../mapper/UserMap';
import { User } from '../../model/Users';
import { IUserRepository, ICreateUserDTO } from "../../repositories/IUserRepository";


class GetUserUseCase {
    constructor(
        
        private usersRepository: IUserRepository){    }

           
    async execute(id:string):Promise<ICreateUserDTO> {
      const user =   await this.usersRepository.findById(id);

      if(!user){
          throw new Error("User not found");
      }

      return user;
} 

// async execute(cpf:string):Promise<ICreateUserDTO> {
//     const cpfUser =   await this.usersRepository.findCpf(cpf);

//     if(!cpfUser){
//         throw new Error("cpf not found");
//     }


//     return cpfUser;
// }

}
export {GetUserUseCase  }