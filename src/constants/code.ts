class ResCode {
    private _status: number
    private _code: number
    private _msg: string

    constructor(status: number, code: number, msg: string) {
        this._status = status
        this._code = code
        this._msg = msg
    }

    public get status(): number {
        return this._status
    }
    public set status(value: number) {
        this._status = value
    }

    public get code(): number {
        return this._code
    }
    public set code(value: number) {
        this._code = value
    }

    public get msg(): string {
        return this._msg
    }
    public set msg(value: string) {
        this._msg = value
    }
}

// 枚举状态码 根据自己需要定义
const Code = {
    Success: new ResCode(200, 0, '请求成功'),
    SuccessWithException: new ResCode(200, -1, '处理失败'),
    ParameterException: new ResCode(400, -1, '参数错误'),
    Forbidden: new ResCode(403, -1, '无权限'),
    ServerError: new ResCode(500, -1, '系统异常'),
}

// 状态类型 只能是Code中所枚举的状态
type codeType = keyof typeof Code

export { Code, codeType }
