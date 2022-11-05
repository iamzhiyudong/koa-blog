import { Context } from 'koa'
import UserDto from '../dto/user'
import commonRes from '../utils/common-res'
import db from '../utils/db-connect'
import getPager from '../utils/page'
import { validate } from '../utils/validate'

export async function getUserList(ctx: Context) {
    const { skip, take } = getPager(ctx)

    const userList = await db.user.findMany({ skip, take })
    commonRes(ctx, { data: userList, total: userList.length })
}

export async function createUser(ctx: Context) {
    const { name, password, confirm_password } = validate(
        UserDto.createUserDto,
        ctx.request.body
    )

    if (password !== confirm_password) {
        commonRes.error('ParameterException', '两次密码不一致')
    }

    await db.user.create({ data: { name, password } })
    commonRes(ctx, null)
}

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

export async function deleteUser(ctx: Context) {
    const id = +ctx.params.id

    const user = await db.user.findFirst({ where: { id } })

    if (user) {
        await db.user.delete({ where: { id: user.id }})
    } else {
        commonRes.error('SuccessWithException', '此用户不存在')
    }

    commonRes(ctx, null)
}
