import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_PRODUK_PESANANMBL = "GET_PRODUK_PESANANMBL";

export const getListPesananMbl = (id) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_PRODUK_PESANANMBL);

            FIREBASE.database()
                .ref(`pesanans/${uid}`)
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val();

                    dispatchSuccess(dispatch, GET_PRODUK_PESANANMBL, data)
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_PRODUK_PESANANMBL, error);
                    alert(error)
                })
        
    }
}