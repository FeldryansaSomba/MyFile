import { GET_PRODUK_PESANANMBL, GET_TERIMA_PESANANMBL, SAVE_KEYWORD_KERJA } from '../../actions/PesananMblAction'

const initialState = {
    getProdukPesananMblLoading: false,
    getProdukPesananMblResult: false,
    getProdukPesananMblError: false,
    
    getTerimaPesananMblLoading: false,
    getTerimaPesananMblResult: false,
    getTerimaPesananMblError: false,

    keyword: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUK_PESANANMBL:
            return {
                ...state,
                getProdukPesananMblLoading: action.payload.loading,
                getProdukPesananMblResult: action.payload.data,
                getProdukPesananMblError: action.payload.errorMessage,
            };
       
        case GET_TERIMA_PESANANMBL:
            return {
                ...state,
                getTerimaPesananMblLoading: action.payload.loading,
                getTerimaPesananMblResult: action.payload.data,
                getTerimaPesananMblError: action.payload.errorMessage,
            };

            case SAVE_KEYWORD_KERJA:
            return {
                ...state,
                keyword: action.payload.data
                }

            default:
                return state;
    }
}