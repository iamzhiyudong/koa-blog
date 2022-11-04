import { Context, Next } from 'koa'
import { Code, codeType } from '../constants/code'
import logger from '../utils/logger'

export class HttpException extends Error {
    private _status: number
    private _msg: string
    private _code: number

    constructor(codeType: codeType, errMsg?: string) {
        super()
        this._status = Code[codeType].status
        this._code = Code[codeType].code
        this._msg = errMsg || Code[codeType].msg
    }

    public get status() {
        return this._status
    }
    public get msg() {
        return this._msg
    }
    public get code() {
        return this._code
    }
}

export async function errorCatch(ctx: Context, next: Next) {
    try {
        await next()
    } catch (err: any) {
        const logObj = {
            url: ctx.request.URL,
            query: ctx.request.query,
            body: ctx.request.body,
            msg: err.msg || err.message
        }
        logger.error(logObj)
        console.error(logObj)

        if (err instanceof HttpException) {
            ctx.status = err.status
            return ctx.body = {
                code: err.code,
                msg: err.msg,
                data: null,
            }
        }
        return ctx.body = '服务器错误'
    }
}
