import { REGISTER_USER, LOGIN_USER } from '../../actions/AuthAction'
import { REGISTER_MEBEL, LOGIN_MEBEL } from '../../actions/AuthMblAction';

const initialState = {
    registerLoading: false,
    registerResult: false,
    registerError: false,

    registerMebelLoading: false,
    registerMebelResult: false,
    registerMebelError: false,

    loginLoading: false,
    loginResult: false,
    loginError: false,

    loginMebelLoading: false,
    loginMebelResult: false,
    loginMebelError: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                registerLoading: action.payload.loading,
                registerResult: action.payload.data,
                registerError: action.payload.errorMessage,
            };

        case REGISTER_MEBEL:
            return {
                ...state,
                registerMebelLoading: action.payload.loading,
                registerMebelResult: action.payload.data,
                registerMebelError: action.payload.errorMessage,
                };

        case LOGIN_USER:
            return {
                ...state,
                loginLoading: action.payload.loading,
                loginResult: action.payload.data,
                loginError: action.payload.errorMessage,
            };
        case LOGIN_MEBEL:
            return {
                 ...state,
                loginMebelLoading: action.payload.loading,
                loginMebelResult: action.payload.data,
                loginMebelError: action.payload.errorMessage,
            };
            default:
                return state;
    }
}