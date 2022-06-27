import { MASUK_KEPESANAN, GET_LIST_PESANAN } from '../../actions/PesananAction'

const initialState = {
    savePesananLoading: false,
    savePesananResult: false,
    savePesananError: false,

    getListPesananLoading: false,
    getListPesananResult: false,
    getListPesananError: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case MASUK_KEPESANAN:
            return {
                ...state,
                savePesananLoading: action.payload.loading,
                savePesananResult: action.payload.data,
                savePesananError: action.payload.errorMessage,
            };
        case GET_LIST_PESANAN:
            return {
                ...state,
                getListPesananLoading: action.payload.loading,
                getListPesananResult: action.payload.data,
                getListPesananError: action.payload.errorMessage,
            };
            default:
                return state;
    }
}