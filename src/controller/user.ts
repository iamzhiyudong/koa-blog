import { Context } from 'koa'
import UserDto from '../dto/user'
import commonRes from '../utils/common-res'
import { validate } from '../utils/validate'

export function getUserList(ctx: Context) {
    commonRes(ctx, 'get user list')
}

export function createUser(ctx: Context) {
    const value = validate(ctx, UserDto.createUserDto, ctx.request.body)
    commonRes(ctx, value)
}
