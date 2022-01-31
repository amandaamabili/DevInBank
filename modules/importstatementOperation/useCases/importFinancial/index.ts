import { FinancialRepository } from "../../repositories/implementations/FinancialDataRepository";
import { ImportFinancialDataController } from "./ImportFinancialDateController";
import { ImportFinancialDataUseCase } from "./ImportFinancialDataUseCase";

const financialRepository = FinancialRepository.getInstance()
const importFinancialDataUseCase = new ImportFinancialDataUseCase(financialRepository);
const importFinancialDataController = new ImportFinancialDataController(
    importFinancialDataUseCase
);

export  {importFinancialDataController}