import {  ICreateUserDTO  } from "../repositories/IUserRepository";


import { User } from "../model/Users";

class UserMap {
  static toDTO({
    name,
    id,
    cpf,
    email,
  }: User): ICreateUserDTO {
    const user =({
      email,
      name,
      id,
      cpf,
    });
    return user;
  }
}

export { UserMap };
