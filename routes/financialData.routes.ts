import { request, response, Router } from 'express';
import multer from 'multer';

import { importFinancialDataController } from '../modules/importstatementOperation/useCases/importFinancial';
import { listFinancialController } from '../modules/importstatementOperation/useCases/listFinancial';
import { deleteFinancialController } from '../modules/importstatementOperation/useCases/deletFinancial';


const financialRoutes = Router();

const upload = multer({
     dest:"../tmp",
})

financialRoutes.get("/:userId", (request, response) => {
     return  listFinancialController.handle(request, response);
});

financialRoutes.delete("/:userId/:financialId", (request, response) => {
     return  deleteFinancialController.handle(request, response);
});

financialRoutes.post("/import/:userId", upload.single("file"), (request, response) => {
    return importFinancialDataController.handle(request, response);
})

export { financialRoutes };