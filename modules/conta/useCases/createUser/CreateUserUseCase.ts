import { IUserRepository } from "../../repositories/IUserRepository";



interface IRequest {
    name: string;
    email: string;
    cpf: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUserRepository){    }

    execute({name, email, cpf}: IRequest): void {

        const nameAlreadyExists = this.usersRepository.findByName(name);
        if(nameAlreadyExists){
            throw new Error("Name already exists");
        }

        const verifyIfExistsCPF = this.usersRepository.findCpf(cpf);

        if(verifyIfExistsCPF){
            throw new Error("Cpfalready exists");
        }

        const verifyIfExistsEmail = this.usersRepository.findEmail(email);

        if(verifyIfExistsEmail){
            throw new Error("Email already exists");
        }
        
        this.usersRepository.create({name, email, cpf});

        
    }

   
}

export {CreateUserUseCase  }