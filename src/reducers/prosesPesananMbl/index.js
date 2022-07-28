import { GET_PROSES_PESANAN } from '../../actions/ProsesMblAction'

const initialState = {
    // saveProsesLoading: false,
    // saveProsesResult: false,
    // saveProsesError: false,

    getProsesPesananLoading: false,
    getProsesPesananResult: false,
    getProsesPesananError: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROSES_PESANAN:
            return {
                ...state,
                getProsesPesananLoading: action.payload.loading,
                getProsesPesananResult: action.payload.data,
                getProsesPesananError: action.payload.errorMessage,
            };
            default:
                return state;
    }
}