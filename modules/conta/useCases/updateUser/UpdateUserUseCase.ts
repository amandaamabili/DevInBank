
import { request } from 'express';
import { UserMap } from '../../mapper/UserMap';
import { User } from '../../model/Users';
import { IUserRepository, ICreateUserDTO } from "../../repositories/IUserRepository";


class UpdateUserUseCase {
    constructor(
        
        private usersRepository: IUserRepository){    }

           
    async execute(id:string, name:string, email:string, cpf:string):Promise<ICreateUserDTO> {
      const user =   await this.usersRepository.findById(id);

      if(!user){
          throw new Error("User not found");
      }

      user.name = name;
      user.email = email;
      user.cpf = cpf;
      await this.usersRepository.create(user);
      return user;
} 

}
export {UpdateUserUseCase  }