import { GET_PRODUK, GET_PRODUK_BY_FILTER, DELETE_PARAMETER_FILTER, SAVE_KEYWORD_PRODUK, GET_PRODUK_MBL } from '../../actions/ProdukAction'
import { GET_DETAIL_PRODUK } from '../../actions/DetailProdukAction';
import { TAMBAH_PRODUK } from '../../actions/AddProdukAction';

const initialState = {
    getProdukLoading: false,
    getProdukResult: false,
    getProdukError: false,

    getProdukMblLoading: false,
    getProdukMblResult: false,
    getProdukMblError: false,

    idFilter: false,
    namaProduk: false,
    keyword: false,

    getDetailProdukLoading: false,
    getDetailProdukResult: false,
    getDetailProdukError: false,

    addProdukLoading: false,
    addProdukResult: false,
    addProdukError: false,
}

export default function (state = initialState, action) {
    // console.log("action payload:",action.payload);
    switch (action.type) {
        case GET_PRODUK:
            return {
                ...state,
                getProdukLoading: action.payload.loading,
                getProdukResult: action.payload.data,
                getProdukError: action.payload.errorMessage,
            };
        case GET_PRODUK_MBL:
            return {
                ...state,
                getProdukMblLoading: action.payload.loading,
                getProdukMblResult: action.payload.data,
                getProdukMblError: action.payload.errorMessage,
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
        case GET_DETAIL_PRODUK:
            return {
                ...state,
                getDetailProdukLoading: action.payload.loading,
                getDetailProdukResult: action.payload.data,
                getDetailProdukError: action.payload.errorMessage,
                }
        case TAMBAH_PRODUK:
            return {
                ...state,
                addProdukLoading: action.payload.loading,
                addProdukResult: action.payload.data,
                addProdukError: action.payload.errorMessage,
            };
        default:
            return state;
    }
}