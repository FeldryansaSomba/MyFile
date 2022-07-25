import { PROSES_PESANAN, GET_LIST_PESANAN } from '../../actions/ProsesMblAction'

const initialState = {
    saveProsesLoading: false,
    saveProsesResult: false,
    saveProsesError: false,

    getListPesananLoading: false,
    getListPesananResult: false,
    getListPesananError: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case PROSES_PESANAN:
            return {
                ...state,
                saveProsesLoading: action.payload.loading,
                saveProsesResult: action.payload.data,
                saveProsesError: action.payload.errorMessage,
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