import fs from 'fs';
import {parse} from 'csv-parse';
import { IFinancialDataRepository, ITransactions } from '../../repositories/IFinancialDataRepository';
import { v4 as uuidv4 } from 'uuid';



class ImportFinancialDataUseCase{

    constructor(private financialDataRepository: IFinancialDataRepository){}

    loadFinances(file: Express.Multer.File): Promise<ITransactions[]>{
       return new Promise((resolve, reject) =>{
        const stream =  fs.createReadStream(file.path);
        const finances : ITransactions[] = [];

        const parseFile = parse();
 
        stream.pipe(parseFile);
 
        parseFile.on("data", async(line) => {
           const [name, price, typesOfExpenses, date ] = line;
           finances.push({ name, price, typesOfExpenses, date 
        });
        })
       .on("end", () => {
           fs.promises.unlink(file.path);
           resolve(finances);
       })
       .on("error", (error) => {
           reject(error);
       })
       })
     }
     async execute(file: Express.Multer.File, userId:string):Promise<void> {
        const finances = await this.loadFinances(file);

        //esse user já tem finanças cadastradas?
        //se ele já tiver. vc tem adicionar essas novas
        //
        const id = uuidv4()
        const data = {   
            id,
            userId,
            financialData: finances
        }
        //se já tiver, usar um update ao invés de create.
        
        this.financialDataRepository.create(data)

    //    finances.map(async (finance) => {
    //        const {name, price, typesOfExpenses, date } = finance;

    //        const existFinance = await this.financialDataRepository.findByName(name);

    //        if(!existFinance){
    //            this.financialDataRepository.create({
    //             name, price, typesOfExpenses, date 
    //            });
    //        }

    //    });
    }
}
    
export  {ImportFinancialDataUseCase}