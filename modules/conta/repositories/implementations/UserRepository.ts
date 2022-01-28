import { User } from "../../model/Users";
import {IUserRepository , ICreateUserDTO  } from "../IUserRepository";


class UserRepository implements IUserRepository {
     users: User[] = [];
    post: any;

    private static Instance = new UserRepository();

    private constructor(){
        this.users = [];
    }

    public static getInstance(): UserRepository{
        if(!UserRepository.Instance){
            UserRepository.Instance = new UserRepository();
        }
        return UserRepository.Instance;
    }
   

    async create({ 
        email,
         cpf,
          name 
        }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, { 
            email, 
            name, 
            cpf });

        this.users.push(user);
    }
    findByName(name: string): User{
       const user = this.users.find(user => user.name === name);

       return user;
    }

    findCpf(cpf: string): User{
        const userCpf = this.users.find(userCpf => userCpf.cpf === cpf);
    
        return  userCpf;
    }
    findEmail(email: string): User{
        const userEmail = this.users.find(userEmail => userEmail.email === email);
        
        return  userEmail; 
    }
   list(): User[]{return this.users};

      findById(id: string): User{
        return  this.users.find(user => user.id == id);
      
    }
}

export {UserRepository }