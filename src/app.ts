import Koa, { Context, Next } from 'koa'
import initMiddleware from './middleware'
import config from 'config'
import router from './router'

const app = new Koa()

initMiddleware(app)

router.get('/', (ctx: Context, next: Next) => {
    ctx.body = 'hello koa'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(config.get('app.port'))

// 热更新重载
process.on('SIGTERM', () => {
    console.log('=== SIGTERM received, exiting ===')
    process.exit(0)
})

