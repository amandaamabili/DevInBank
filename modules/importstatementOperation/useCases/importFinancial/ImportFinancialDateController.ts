import { Response, Request } from "express";
import { ImportFinancialDataUseCase } from "./ImportFinancialDataUseCase";


class ImportFinancialDataController {
    constructor(private importFinancialDataUsease: ImportFinancialDataUseCase){}
    handle(  request: Request, response: Response ): Response{
        const {file} = request;
        const userId = request.params.userId;
        //usuário existe? usar repository para validar
        //caso nao exista retornar um erro
        
       this.importFinancialDataUsease.execute( file, userId );

        return response.send()
    }
}
export {ImportFinancialDataController } ;