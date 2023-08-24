// 1 Configure our redis
const redisClient = redis.createClient({
    socket: {
        port: 6379,
        host: 'localhost'
    }
})
redisClient.connect().catch(console.error)


// 2 Configure our session MW



export const sessionMW = session({
    store: new RedisStore({client: redisClient}),
    secret: 'MySecret',
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false, // if true: only transmit cookie over https,
        httpOnly: true, // if true: prevents client side JS from reading cookie
        maxAge: 1000 * 60 * 30 // session max Age in ms
    }

})