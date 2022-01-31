import { FinancialData } from "../model/financialData";


interface ITransactions {
    name:string;
    price:number;
    typesOfExpenses: string;
    date: Date;
}


interface ICreateFinancialDataDTO{
    userId:string;
    id:string;
    financialData:ITransactions []
}

interface IFinancialDataRepository {
    create(data: ICreateFinancialDataDTO): Promise<void>;
    findByUserAndId(userId: string, financialId: string): FinancialData;
   // findDate(cpf: string): FinancialData;
    listByUser(userId: string): FinancialData[];
    findById(id: string): FinancialData;
    delete(financialData : FinancialData): void;
   
}

export  {IFinancialDataRepository , ICreateFinancialDataDTO, ITransactions  };