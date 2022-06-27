import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_DETAIL_PRODUK = "GET_DETAIL_PRODUK";

export const getDetailProduk = (id) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_DETAIL_PRODUK);

            FIREBASE.database()
                .ref('produks/'+id)
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val();

                    dispatchSuccess(dispatch, GET_DETAIL_PRODUK, data)
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_DETAIL_PRODUK, error);
                    alert(error)
                })
        
    }
}