import { combineReducers } from "redux";
import UserReducer from './user'
import AuthReducer from './auth'
import ProfileReducer from './profile'
import FilterReducer from './filter'
import ProdukReducer from './produk'
import PesananReducer from './pesananCS'
import PesananMblReducer from './pesananMbl'

const rootReducer = combineReducers({
    UserReducer,
    AuthReducer,
    ProfileReducer,
    FilterReducer,
    ProdukReducer,
    PesananReducer,
    PesananMblReducer
});

export default rootReducer