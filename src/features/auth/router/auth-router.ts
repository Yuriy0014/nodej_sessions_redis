import {Router} from 'express';
import {authController} from "../controller/auth-controller";
import {authMW} from "../mw/auth-mw";

export const authRouter = Router({})


authRouter.get('/', authController.home)

authRouter.post('/login', authController.login)

authRouter.post('/profile',
    authMW,
    authController.profile)