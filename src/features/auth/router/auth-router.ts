import express, {NextFunction, Request, Response,Router} from 'express';
export const authRouter = Router({})


authRouter.post('/login', (req: Request, res: Response) => {

    const {username, password} = req.body

    // Check if the credentials are correct
    //..

    // assume that credentials are correct

    //@ts-ignore   ПОЗЖЕ ПОПРАВИТЬ - если надо расширить тип :)
    req.session.clientId = 'abc123'
    //@ts-ignore
    req.session.myNum = 5

    res.json('you are now logged in')
})

//4 plug in another MW that will check if the user is authenticated or not
// all requests are plugged in after this MW will only be accessible if the user is logged in

app.use((req: Request, res: Response, next: NextFunction) => {
    if (!req.session || !req.session.clientId) {
        const err = new Error('Yoy shall not pass');
        //@ts-ignore
        err.statusCode = 401;
        next(err);
    }
    next();
});

// 5 plug in all routes that the user can only access if logged in
authRouter.post('/profile', (req: Request, res: Response) => {
    res.json(req.session)
})

authRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})