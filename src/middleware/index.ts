import Koa, { Context } from 'koa'
import json from 'koa-json'
import koaBodyParser from 'koa-bodyparser'
import responseHeader from './response-header'
import { errorCatch } from './catch-err'
import cors from 'koa2-cors'
import jwt from 'koa-jwt'
import config from 'config'

const secret = config.get('app.secret') as string

function initMiddleware(app: Koa) {
    app.use(errorCatch)
    app.use(
        cors({
            origin: (ctx: Context) => '*',
            allowMethods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTION'],
        })
    )
    app.use(koaBodyParser())
    app.use(json())
    app.use(responseHeader)
    app.use(
        jwt({
            secret,
        }).unless({ path: [/\/register/, /\/login/] })
    )
}

export default initMiddleware
