import { GET_PRODUK_PESANANMBL, GET_TERIMA_PESANANMBL } from '../../actions/PesananMblAction'

const initialState = {
    getProdukPesananMblLoading: false,
    getProdukPesananMblResult: false,
    getProdukPesananMblError: false,
    
    getTerimaPesananMblLoading: false,
    getTerimaPesananMblResult: false,
    getTerimaPesananMblError: false,

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

            default:
                return state;
    }
}