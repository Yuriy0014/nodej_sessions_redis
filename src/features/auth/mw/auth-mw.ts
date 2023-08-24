import {NextFunction, Request, Response} from "express";

// plug in  MW that will check if the user is authenticated or not
// all requests are plugged in after this MW will only be accessible if the user is logged in


export const authMW = ((req: Request, res: Response, next: NextFunction) => {
    if (!req.session || !req.session.clientId) {
        const err = new Error('Yoy shall not pass');
        res.status(401).json({
            message: 'Unfortunately, you are not authenticated',
            errorText: err
        })
    }
    next();
});