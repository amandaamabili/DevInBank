
import {Request, Response} from "express";



import { GetUserUseCase } from "./GetUserUseCase";



class GetUserController{

  constructor(private getUserUseCase: GetUserUseCase) {

  }
  
    async handle(request: Request, response: Response): Promise<Response>{
    const  id:any = request.params.id;
    console.log(id)
    
    //passar parametros por path param, query param, body.
    
    //validar que o id está chegando


    const user = await this.getUserUseCase.execute(id)
    //user  
    return response.json(user);
  }


  
}
export  {GetUserController }