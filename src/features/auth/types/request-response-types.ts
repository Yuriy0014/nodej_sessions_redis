import {Request} from "express";

export type AuthReqWithBody<T> = Request<{},{},T>