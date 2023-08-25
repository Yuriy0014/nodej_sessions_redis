import {NextFunction, Request, Response} from "express";
import {STATUSES_HTTP} from "../../../helpers/statuses_http";

// plug in  MW that will check if the user is authenticated or not
// all requests are plugged in after this MW will only be accessible if the user is logged in


export const authMW = ((req: Request, res: Response, next: NextFunction) => {
    if (!req.session || !req.session.clientId) {
        const error = new Error('Yoy shall not pass')
        const answer = {
            message: 'Unfortunately, you are not authenticated',
            errorText: error.toString()
        }
        res.status(STATUSES_HTTP.UNAUTHORIZED_401).json(answer)
        return
    }
    next();
});