// Разобраться как потом это перенести в отдельный файл
declare global {
    declare module 'express-session' {
        export interface SessionData {
            clientId: string;
            myNum: number;
        }
    }
}