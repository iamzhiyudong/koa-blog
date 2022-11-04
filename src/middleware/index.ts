import Koa from 'koa'
import json from 'koa-json'
import koaBodyParser from 'koa-bodyparser'
import responseHeader from './response-header'
import { errorCatch } from './catch-err'

function initMiddleware(app: Koa) {
    app.use(errorCatch)
    app.use(koaBodyParser())
    app.use(json())
    app.use(responseHeader)
}

export default initMiddleware