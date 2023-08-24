
import session from 'express-session';
import * as redis from 'redis';


// Разобраться как потом это перенести в отдельный файл
declare module 'express-session' {
    export interface SessionData {
        clientId: string;
    }
}


import RedisStore from "connect-redis"
import {app} from "./app_settings";



// if you run behind the proxy (kubernetes, nginx)

const port = 3000



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})