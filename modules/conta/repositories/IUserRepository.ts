import { User } from "../model/Users";


interface ICreateUserDTO {
    id?:string;
    name: string;
    email: string;
    cpf: string;
}

interface IUserRepository {
    create({email, cpf, name}: ICreateUserDTO): Promise<void>;
    findByName(name: string): User;
    findCpf(cpf: string): User;
    findEmail(email: string): User;
    list(): User[];
    findById(id: string): User;
   
}

export  {IUserRepository , ICreateUserDTO };