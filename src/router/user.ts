import Router from '@koa/router'
import {
    createUser,
    deleteUser,
    getUserList,
    login,
    updateUser,
} from '../controller/user'

const userRouter = new Router()

userRouter.get('/', getUserList)
userRouter.post('/', createUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

userRouter.post('/login', login)
userRouter.post('/register', createUser)

export default userRouter
