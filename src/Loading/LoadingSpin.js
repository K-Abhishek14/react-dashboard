
import { message } from 'antd'

message.config({
    duration: 0,
    maxCount: 1,
});

export const LoadingSpin = (isLoading, content) => {
    if (isLoading) {
        return message.loading(content ? content : 'Action in progress..', 0)
    }
    else {
        return message.destroy()
    }
}

