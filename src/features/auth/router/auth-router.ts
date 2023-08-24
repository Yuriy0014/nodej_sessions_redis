import {Request, Response,Router} from 'express';
export const authRouter = Router({})


authRouter.post('/login', (req: Request, res: Response) => {

    const {username, password} = req.body
    // Check if the credentials are correct
    //..
    // assume that credentials are correct

    req.session.clientId = 'abc123'
    req.session.myNum = 5

    res.json('you are now logged in')
})

// 5 plug in all routes that the user can only access if logged in
authRouter.post('/profile', (req: Request, res: Response) => {
    res.json(req.session)
})

authRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})