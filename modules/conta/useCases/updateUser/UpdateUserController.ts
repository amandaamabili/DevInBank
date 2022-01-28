import {Request, Response} from "express";



import { UpdateUserUseCase } from "./UpdateUserUseCase";



class UpdateUserController{

  constructor(private updateUserUseCase: UpdateUserUseCase) {

  }
  
    async handle(request: Request, response: Response): Promise<Response>{
    const  {id, name, email, cpf} = request.body;
    
    console.log(id)
   

     this.updateUserUseCase.execute(id, name, email, cpf)
    //user  
    return response.status(204).send();
  }


  
}
export  {UpdateUserController}