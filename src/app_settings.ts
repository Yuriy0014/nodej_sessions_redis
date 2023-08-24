import express from "express";

export const app = express()

const jsonBodyMW = express.json()
app.use(jsonBodyMW)
app.set('trust proxy', 1)

app.use()


app.use()