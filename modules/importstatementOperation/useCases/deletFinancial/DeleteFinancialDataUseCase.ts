import { request } from 'express';
import { FinancialData } from '../../model/financialData';
import { IFinancialDataRepository, ICreateFinancialDataDTO } from "../../repositories/IFinancialDataRepository";


class DeleteFinancialUseCase {
    constructor(

        private financesRepository: IFinancialDataRepository) { }


     execute(userId: string, financialId:string): string {

        const financialData =  this.financesRepository.findByUserAndId(userId, financialId);
        
        if (!financialData) {
            throw new Error("Financial not found");
        }

        this.financesRepository.delete(financialData);

        return financialId;
    }


}
export { DeleteFinancialUseCase }