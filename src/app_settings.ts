import express from "express";
import {sessionMW} from "./features/auth/mw/session-mw";
import {RouterPaths} from "./helpers/RouterPaths";
import {authRouter} from "./features/auth/router/auth-router";

export const app = express()

const jsonBodyMW = express.json()
app.use(jsonBodyMW)

// if you run behind the proxy (kubernetes, nginx)
app.set('trust proxy', 1)

app.use(sessionMW)

app.use(RouterPaths.auth,authRouter)