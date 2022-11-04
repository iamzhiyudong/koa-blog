import Router from '@koa/router'
import { createUser, getUserList, updateUser } from '../controller/user'

const userRouter = new Router()

userRouter.get('/', getUserList)
userRouter.post('/', createUser)
userRouter.put('/:id', updateUser)

export default userRouter
