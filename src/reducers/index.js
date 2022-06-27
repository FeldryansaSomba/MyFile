import { combineReducers } from "redux";
import UserReducer from './user'
import AuthReducer from './auth'
import ProfileReducer from './profile'
import FilterReducer from './filter'
import ProdukReducer from './produk'
import PesananReducer from './pesananCS'

const rootReducer = combineReducers({
    UserReducer,
    AuthReducer,
    ProfileReducer,
    FilterReducer,
    ProdukReducer,
    PesananReducer
});

export default rootReducer