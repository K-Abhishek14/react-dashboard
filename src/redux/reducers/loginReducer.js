import {IS_LOGIN, GET_TOKEN} from '../types/index';

const initialState = {
    token : ''
}
const LoginInitialState = {
    token : "",
    loginData : '',
    getToken : "",
    isLogin : false,
}

export const LoginReducer = (state = LoginInitialState, action = {}) => {
    switch (action.type) {
        case IS_LOGIN:
            console.log("IS LOGIN Reducer", action);
            return{
                ...state,
                loginData:action.payload.data,
                isLogin : true
            }
        case GET_TOKEN:
            console.log("GET TOKEN Reducer", action);
            return{
                ...state,
                getToken : action
            }     
    
        default:
           return state
    }
}