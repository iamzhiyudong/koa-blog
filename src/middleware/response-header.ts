import { Context, Next } from 'koa'

const responseHeader = async (ctx: Context, next: Next) => {
    const { origin, Origin, referer, Referer } = ctx.request.headers

    // 若没有手动设置，则为通配符
    const allowOrigin = origin || Origin || referer || Referer || '*'

    // 允许请求源
    ctx.set('Access-Control-Allow-Origin', allowOrigin)
    // 允许头部字段
    ctx.set('Access-Control-Allow-Headers', 'Content-Type')
    // 允许公开的头部字段
    ctx.set('Access-Control-Expose-Headers', 'Content-Disposition')
    // 允许的请求方式
    ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    // 允许携带cookie
    ctx.set('Access-Control-Allow-Credentials', 'true')

    // 预检返回204
    if (ctx.method == 'OPTIONS') {
        ctx.status = 204
    }
    // 自定义中间件注意返回 next
    await next()
}

export default responseHeader