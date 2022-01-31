import { v4 as uuidv4 } from 'uuid';
import {FinancialData}  from '../../importstatementOperation/model/financialData'

class Statement {
    id?:string;
    userId: Number;
    financialData: [
        FinancialData
    ]
       

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}
export {Statement}