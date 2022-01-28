import {Router} from 'express';


import { userRoutes, usersRoutes } from './user.routes';

const router = Router();


router.use("/user",userRoutes);
router.use("/users", usersRoutes)

export {router};