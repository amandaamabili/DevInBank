import { Request, Response } from "express";



import { DeleteFinancialUseCase } from "./DeleteFinancialDataUseCase";



class DeleteFinancialController {

    constructor(private deleteUserUseCase: DeleteFinancialUseCase) {

    }

    handle(request: Request, response: Response): Response {
        const userId= request.params.userId;
        const financialId = request.params.financialId;

        const financialIdDeleted = this.deleteUserUseCase.execute(userId, financialId);

        return response.status(201).send();//!== undefined ? response.status(200) : response.status(500);
    }



}
export { DeleteFinancialController }