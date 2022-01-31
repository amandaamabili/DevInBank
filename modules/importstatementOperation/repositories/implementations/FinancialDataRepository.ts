import { FinancialData } from "../../model/financialData";
import { IFinancialDataRepository, ICreateFinancialDataDTO } from "../IFinancialDataRepository";


class FinancialRepository implements IFinancialDataRepository {
    finances: FinancialData[] = [];
    post: any;

    private static Instance = new FinancialRepository();

    private constructor() {
        this.finances = [];
    }


    public static getInstance(): FinancialRepository {
        if (!FinancialRepository.Instance) {
            FinancialRepository.Instance = new FinancialRepository();
        }
        return FinancialRepository.Instance;
    }


    async create(data: ICreateFinancialDataDTO): Promise<void> {
        const financialData = new FinancialData();

        Object.assign(financialData, {
            userId: data.userId,
            id: data.id,
            transactions: data.financialData
        });

        this.finances.push(financialData);
    }

    findByUserAndId(userId: string, financialId: string): FinancialData {
        return this.listByUser(userId).find(financial => financial.id === financialId)
    }

    listByUser(userId: string): FinancialData[] {
        return this.finances.filter(financialData => financialData.userId === userId)
    };

    findById(id: string): FinancialData {
        return this.finances.find(user => user.id == id);

    }

    delete(financialData: FinancialData): void {
        let index = this.finances.indexOf(financialData)

        if (index > -1) {
            this.finances.splice(index, 1)
        }
        return ;
    }

}

export { FinancialRepository }