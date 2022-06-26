import { combineReducers } from "redux";
import UserReducer from './user'
import AuthReducer from './auth'
import ProfileReducer from './profile'
import FilterReducer from './filter'
import ProdukReducer from './produk'

const rootReducer = combineReducers({
    UserReducer,
    AuthReducer,
    ProfileReducer,
    FilterReducer,
    ProdukReducer
});

export default rootReducer