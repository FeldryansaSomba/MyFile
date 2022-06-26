import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_FILTER = "GET_FILTER";

export const getFilter = () => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_FILTER);

        FIREBASE.database()
                .ref('filter')
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val() ? querySnapshot.val() : [];

                    dispatchSuccess(dispatch, GET_FILTER, data)
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_FILTER, error);
                    alert(error)
                })
    }
}