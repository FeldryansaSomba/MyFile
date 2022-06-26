import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_PRODUK = "GET_PRODUK";
export const GET_PRODUK_BY_FILTER = "GET_PRODUK_BY_FILTER";
export const DELETE_PARAMETER_FILTER = "DELETE_PARAMETER_FILTER";
export const SAVE_KEYWORD_PRODUK = "SAVE_KEYWORD_PRODUK";

export const getProduk = (idFilter, keyword) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_PRODUK);

        if(idFilter){
            FIREBASE.database()
            .ref('produks')
            .orderByChild('produk')
            .equalTo(idFilter)
            .once('value', (querySnapshot) => {

                //Hasil
                let data = querySnapshot.val();

                dispatchSuccess(dispatch, GET_PRODUK, data)
            })
            .catch((error) => {
                
                dispatchError(dispatch, GET_PRODUK, error);
                alert(error)
            })
        }else if (keyword) {
            FIREBASE.database()
            .ref('produks')
            .orderByChild('nama')
            .equalTo(keyword)
            .once('value', (querySnapshot) => {

                //Hasil
                let data = querySnapshot.val();

                dispatchSuccess(dispatch, GET_PRODUK, data)
            })
            .catch((error) => {
                
                dispatchError(dispatch, GET_PRODUK, error);
                alert(error)
            })
        } else {
            FIREBASE.database()
                .ref('produks')
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val();

                    dispatchSuccess(dispatch, GET_PRODUK, data)
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_PRODUK, error);
                    alert(error)
                })
        }

        FIREBASE.database()
                .ref('produks')
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val();

                    dispatchSuccess(dispatch, GET_PRODUK, data)
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_PRODUK, error);
                    alert(error)
                })
    }
}

export const getProdukByFilter = (id, namaProduk) => ({
    type: GET_PRODUK_BY_FILTER,
    payload: {
        idFilter: id,
        namaProduk: namaProduk
    }
})

export const deleteParameterFilter = () => ({
    type: DELETE_PARAMETER_FILTER,
})

export const saveKeywordProduk = (search) => ({
    type: SAVE_KEYWORD_PRODUK,
    payload: {
        data: search
    }
})

