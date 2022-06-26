import { GET_PRODUK, GET_PRODUK_BY_FILTER, DELETE_PARAMETER_FILTER, SAVE_KEYWORD_PRODUK } from '../../actions/ProdukAction'

const initialState = {
    getProdukLoading: false,
    getProdukResult: false,
    getProdukError: false,

    idFilter: false,
    namaProduk: false,
    keyword: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUK:
            return {
                ...state,
                getProdukLoading: action.payload.loading,
                getProdukResult: action.payload.data,
                getProdukError: action.payload.errorMessage,
            };
        case GET_PRODUK_BY_FILTER:
            return {
                ...state,
                idFilter: action.payload.idFilter,
                namaProduk: action.payload.namaProduk
            }
        case DELETE_PARAMETER_FILTER:
            return {
                ...state,
                idFilter: false,
                namaProduk: false,
                keyword: false
            }
        case SAVE_KEYWORD_PRODUK:
            return {
                ...state,
                keyword: action.payload.data
                }
        default:
            return state;
    }
}