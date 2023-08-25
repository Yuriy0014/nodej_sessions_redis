import {redisStore} from "../../../helpers/redis-config/redis-config";
import session from 'express-session';

export const sessionMW = session({
    store: redisStore,
    secret: 'MySecret',
    saveUninitialized: false,
    resave: false,
    name: 'SessionID',
    cookie: {
        secure: false, // if true: only transmit cookie over https,
        httpOnly: true, // if true: prevents client side JS from reading cookie
        maxAge: 1000 * 60 * 30 // session max Age in ms
    }

})