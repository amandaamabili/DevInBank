import {Router} from 'express';


import { userRoutes, usersRoutes } from './user.routes';
import {financialRoutes} from './financialData.routes';

const router = Router();


router.use("/user",userRoutes);
router.use("/users", usersRoutes);
router.use("/financial", financialRoutes );

export {router};