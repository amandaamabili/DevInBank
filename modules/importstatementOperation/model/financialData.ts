import { v4 as uuidv4 } from 'uuid';

class FinancialData {
    userId:string;
    id:string;
    transactions:{
        id?:string;
        price:number;
        typesOfExpenses: string;
        date: Date;
        name:string;
    
    }
    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}
export {FinancialData}