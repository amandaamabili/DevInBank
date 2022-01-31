import { FinancialRepository } from "../../repositories/implementations/FinancialDataRepository";
import { ListFinancialController } from "./ListFinancialController";
import { ListFinancialUseCase } from "./ListFinancialUseCase";
import { UserRepository } from "../../../conta/repositories/implementations/UserRepository";



const financialRepository = FinancialRepository.getInstance();
const userRepository = UserRepository.getInstance();
const listFinancialUseCase = new ListFinancialUseCase(financialRepository, userRepository);
const listFinancialController = new ListFinancialController(listFinancialUseCase);


export { listFinancialController };