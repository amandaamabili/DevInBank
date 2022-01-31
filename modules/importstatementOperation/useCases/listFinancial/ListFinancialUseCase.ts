import { IUserRepository } from "../../../conta/repositories/IUserRepository";
import { FinancialData } from "../../model/financialData";
import { IFinancialDataRepository, ITransactions, ICreateFinancialDataDTO } from "../../repositories/IFinancialDataRepository";


class ListFinancialUseCase {

    constructor(
        private financesRepository: IFinancialDataRepository,
        private usersRepository: IUserRepository,
    ) { }

    execute(userId: string): FinancialData[] {
        const user = this.usersRepository.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }
        const finances = this.financesRepository.listByUser(user.id);

        return finances;
    }
}

export { ListFinancialUseCase } 