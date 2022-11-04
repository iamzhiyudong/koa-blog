import Joi from 'joi'
import { Context } from 'koa'
import commonRes from '../utils/common-res'

// 参数校验
export function validate(
    dtoSchema: Joi.ObjectSchema<any>,
    data: Record<any, any>
) {
    const { error, value } = dtoSchema.validate(data)

    if (error) {
        commonRes.error('ParameterException', error.message)
        return null
    }
    return value
}
