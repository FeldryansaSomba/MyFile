import { combineReducers } from "redux";
import UserReducer from './user'
import AuthReducer from './auth'

const rootReducer = combineReducers({
    UserReducer,
    AuthReducer
});

export default rootReducer