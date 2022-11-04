import Joi from 'joi'

const UserDto = {
    getUserListDto: Joi.object({
        page_no: Joi.number(),
        page_size: Joi.number(),
    }),
    createUserDto: Joi.object({
        name: Joi.string().required().error(new Error('用户名必填')),
        password: Joi.string().required().error(new Error('密码必填')),
        confirm_password: Joi.string().required(),
    }),
}

export default UserDto
