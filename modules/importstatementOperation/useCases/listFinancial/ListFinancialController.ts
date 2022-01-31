import { Request, Response } from 'express';

import { ListFinancialUseCase } from './ListFinancialUseCase'

class ListFinancialController {

    constructor(private listFinancialUseCase: ListFinancialUseCase) { }
    handle(request: Request, response: Response): Response {
        const userId = request.params.userId;
        const all = this.listFinancialUseCase.execute(userId);

        return response.json(all);
    }
}

export { ListFinancialController }