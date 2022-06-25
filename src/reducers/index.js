import { combineReducers } from "redux";
import UserReducer from './user'
import AuthReducer from './auth'
import ProfileReducer from './profile'

const rootReducer = combineReducers({
    UserReducer,
    AuthReducer,
    ProfileReducer
});

export default rootReducer