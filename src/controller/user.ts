import { Context } from 'koa'
import UserDto from '../dto/user'
import commonRes from '../utils/common-res'
import db from '../utils/db-connect'
import createToken from '../utils/jwt'
import getPager from '../utils/page'
import { validate } from '../utils/validate'

// 获取用户列表
export async function getUserList(ctx: Context) {
    const { skip, take } = getPager(ctx)

    const userList = await db.user.findMany({ skip, take })
    commonRes(ctx, { data: userList, total: userList.length })
}

// 创建用户
export async function createUser(ctx: Context) {
    const { name, password, confirm_password } = validate(
        UserDto.createUserDto,
        ctx.request.body
    )

    if (password !== confirm_password) {
        commonRes.error('ParameterException', '两次密码不一致')
    }

    const user = await db.user.findFirst({ where: { name } })

    if (user) {
        commonRes.error('SuccessWithException', '用户已存在')
    }

    await db.user.create({ data: { name, password } })
    commonRes(ctx, null)
}

// 修改用户
export async function updateUser(ctx: Context) {
    const { name, password } = validate(UserDto.updateUserDto, ctx.request.body)
    const id = +ctx.params.id

    const user = await db.user.findFirst({ where: { id } })
    if (user) {
        await db.user.update({
            where: { id },
            data: { name, password },
        })
    } else {
        commonRes.error('SuccessWithException', '不存在此用户')
    }

    commonRes(ctx, null)
}

//  删除用户
export async function deleteUser(ctx: Context) {
    const id = +ctx.params.id

    const user = await db.user.findFirst({ where: { id } })

    if (user) {
        await db.user.delete({ where: { id: user.id } })
    } else {
        commonRes.error('SuccessWithException', '此用户不存在')
    }

    commonRes(ctx, null)
}

// 登录
export async function login(ctx: Context) {
    const { name, password } = validate(UserDto.loginDto, ctx.request.body)

    const user = await db.user.findFirst({ where: { name, password } })

    if (user) {
        return commonRes(ctx, {
            data: createToken({ id: user.id, name: user.name }),
        })
    }

    commonRes.error('SuccessWithException', '用户名或密码错误')
}
