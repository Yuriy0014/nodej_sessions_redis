import {Request, Response} from "express";
import {STATUSES_HTTP} from "../../../helpers/statuses_http";
import {AuthReqWithBody} from "../types/request-response-types";
import {AuthBodyModel} from "../types/auth-types";


export const authController = {

    async login(req: AuthReqWithBody<AuthBodyModel>, res: Response) {

        const {username, password} = req.body
        // Check if the credentials are correct
        //
        // assume that credentials are correct

        req.session.clientId = 'abc123'
        req.session.myNum = 5

        res.status(STATUSES_HTTP.OK_200).json('you are now logged in')
    },

    async profile(req: Request, res: Response) {
        res.status(STATUSES_HTTP.OK_200).json(req.session)
    },

    async home(req: Request, res: Response){
        res.status(STATUSES_HTTP.OK_200).send('Hello World!')
    }
}