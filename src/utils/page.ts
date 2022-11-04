import config from 'config'
import { Context } from 'koa'
import PageDto from '../dto/page'
import { validate } from './validate'

const default_page_size = +(config.get('page.page_size') as number)
const max_page_size = +(config.get('page.max_page_size') as number)

export default function getPager(ctx: Context): { skip: number; take: number } {
    let { page_no = 1, page_size = default_page_size } = validate(
        PageDto,
        ctx.request.query
    )

    if (page_no < 1) {
        page_no = 1
    }

    if (page_size <= 0) {
        page_size = default_page_size
    } else if (page_size > max_page_size) {
        page_size = max_page_size
    }

    return {
        skip: (page_no - 1) * page_size,
        take: page_size,
    }
}
