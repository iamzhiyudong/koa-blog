import Router from '@koa/router'
import {
    createUser,
    deleteUser,
    getUserList,
    updateUser,
} from '../controller/user'

const userRouter = new Router()

userRouter.get('/', getUserList)
userRouter.post('/', createUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter
