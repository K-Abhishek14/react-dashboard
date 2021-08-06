import {GET_TOKEN, IS_LOGIN} from '../types/index';
import API from '../../Util/API';

export const LoginAction = (user = '', password = '') => dispatch => {
    let body = {
        "username": user,
        "password":password
    }
    let accessToken = ''
    API.post(`/api/v2/auth/secure/signin`, body)
    .then(response => {
        console.log("SIGN IN RESPONSE in LoginAction", response)
        if(response.data){
            accessToken = response.data.accessToken
            localStorage.setItem("token", accessToken);
            localStorage.setItem('isLogin', true);
        }
    dispatch({
        type:IS_LOGIN,
        payload:response
    });
    dispatch({
        type:GET_TOKEN,
        payload:response.data.accessToken
    })
    }).catch(err => {
        localStorage.setItem('isLogin', false);
        console.log("Error", err.message);
    })
}