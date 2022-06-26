import { combineReducers } from "redux";
import UserReducer from './user'
import AuthReducer from './auth'
import ProfileReducer from './profile'
import FilterReducer from './filter'

const rootReducer = combineReducers({
    UserReducer,
    AuthReducer,
    ProfileReducer,
    FilterReducer
});

export default rootReducer