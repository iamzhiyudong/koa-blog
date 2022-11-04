import Router from '@koa/router'
import { createUser, getUserList } from '../controller/user'

const userRouter = new Router()

userRouter.get('/', getUserList)
userRouter.post('/', createUser)

export default userRouter
