import Joi from 'joi'

const PageDto = Joi.object({
    page_no: Joi.number(),
    page_size: Joi.number(),
})

export default PageDto
