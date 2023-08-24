import express from "express";

export const app = express()

const jsonBodyMW = express.json()
app.use(jsonBodyMW)

// if you run behind the proxy (kubernetes, nginx)
app.set('trust proxy', 1)

app.use()