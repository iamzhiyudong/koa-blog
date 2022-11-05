import dayjs from 'dayjs'

function timeFormat(timeStr: string): string {
    return dayjs(timeStr).format('YYYY-DD-MM hh:mm:ss')
}

function transformList(list: Array<any>) {
    return list.map((item) => {
        if ('created_at' in item || 'updated_at' in item) {
            item.created_at = timeFormat(item.created_at)
            item.updated_at = timeFormat(item.updated_at)
        }
        return item
    })
}

export default function timeFieldFormat(responseData: any) {
    let resData = responseData

    if (Array.isArray(resData)) {
        resData = transformList(resData)
    }

    if ('data' in resData && Array.isArray(resData.data)) {
        resData.data = transformList(resData.data)
    }

    return resData
}
