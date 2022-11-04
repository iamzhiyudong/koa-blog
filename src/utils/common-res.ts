import { Context } from 'koa'
import { Code, codeType } from '../constants/code'
import { HttpException } from '../middleware/catch-err'

// 默认成功响应
function commonRes(
    ctx: Context,
    data: string | Array<unknown> | { data: Array<unknown>; total: number }
) {
    const status = Code.Success.status
    const code = Code.Success.code
    const msg = Code.Success.msg

    ctx.response.status = status
    ctx.body = {
        code,
        msg,
        data,
    }
}

// 自定义错误响应
commonRes.error = function (codeType: codeType, msg: string = '') {
    throw new HttpException(codeType, msg)
}

export default commonRes
