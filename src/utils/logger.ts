import path from 'path'
import winston from 'winston'
import 'winston-daily-rotate-file'

const { format } = winston
const { combine, printf } = winston.format

// 自定义控制台输出格式 - 转换成大写 & 控制台输出对象
const myConsoleFormat = printf(({ level, message, label, timestamp }) => {
    const levels = ['error', 'warn', 'info', 'http', 'debug']
    levels.forEach((le) => {
        if (level.includes(le)) {
            level = level.replace(le, le.toUpperCase())
        }
    })

    if (typeof message === 'object') {
        message = JSON.stringify(message)
    }
    return `[${level}]: ${message}`
})

const logger = winston.createLogger({
    exitOnError: false,
    transports: [
        new winston.transports.DailyRotateFile({
            level: 'error',
            filename: 'error.log',
            dirname: 'src/storage/logs',
            datePattern: 'YY-MM-DD',
            maxSize: '7m',
            maxFiles: '7d',
            format: combine(
                format.timestamp({ format: 'YY-MM-DD hh:mm:ss A' }),
                format.json()
            ),
        }),
        new winston.transports.Console({
            format: format.combine(
                format.colorize(),
                format.json(),
                myConsoleFormat
            ),
        }),
    ],
})

export default logger
