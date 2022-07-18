import { GET_PRODUK_PESANANMBL } from '../../actions/PesananMblAction'

const initialState = {
    getProdukPesananMblLoading: false,
    getProdukPesananMblResult: false,
    getProdukPesananMblError: false,

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
            default:
                return state;
    }
}