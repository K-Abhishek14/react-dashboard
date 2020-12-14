import React from 'react';
import { message } from 'antd';

message.config({
    duration: 0,
    maxCount: 1,
});

export const LoadingSpin = (isLoading, content) => {
    console.log("Loading", isLoading)
    if(isLoading){
        console.log("isloading true")
        return message.loading(content ? content : 'Action in progress..',0)
    }
    else {
        console.log("isloading false")
        return message.destroy();
    }
}
