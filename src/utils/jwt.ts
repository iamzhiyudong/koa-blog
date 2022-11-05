import config from 'config'
import jsonwebtoken from 'jsonwebtoken'

const secret = config.get('app.secret') as string

export default function createToken(data: unknown): string {
    return jsonwebtoken.sign(
        { data },
        secret,
        {
            expiresIn: '7h'
        }
    )
}
