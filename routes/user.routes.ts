import {Router} from 'express';
import { createUserController } from '../modules/conta/useCases/createUser';
import { getUserController } from '../modules/conta/useCases/getUser';
import { listUsersControllers } from '../modules/conta/useCases/listUsers';
import { updateUserController } from '../modules/conta/useCases/updateUser';


const userRoutes = Router();
const usersRoutes = Router();


userRoutes.post("/", (request, response) => {
    
    return createUserController.handle(request, response);
})

userRoutes.get("/", (request, response) => {
    return getUserController.handle(request, response);
})
userRoutes.patch("/", (request, response) => {
    return updateUserController.handle(request, response);
})

usersRoutes.get("/", (request, response) => {
    
    return listUsersControllers.handle(request, response);
})

export {userRoutes, usersRoutes };