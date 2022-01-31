import { FinancialRepository } from "../../repositories/implementations/FinancialDataRepository";
import { DeleteFinancialController } from "./DeleteFinancialDataController";
import { DeleteFinancialUseCase } from "./DeleteFinancialDataUseCase";


const financialRepository = FinancialRepository.getInstance();
const deleteFinancialUseCase =  new DeleteFinancialUseCase(financialRepository);
const deleteFinancialController =  new DeleteFinancialController(deleteFinancialUseCase);


export {deleteFinancialController };