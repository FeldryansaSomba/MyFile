import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, storeData, dispatchError, dispatchSuccess } from '../utils';

export const REGISTER_MEBEL = "REGISTER_MEBEL";
export const LOGIN_MEBEL = "LOGIN_MEBEL";

export const registerMebel = (data, password) => {
    return(dispatch) => {
         //LOADING
         dispatchLoading(dispatch, REGISTER_MEBEL)
         
        FIREBASE
        .auth()
        .createUserWithEmailAndPassword(data.email, password)
        .then((success) => {
         // Ambil UID dan buat data baru (data+uid)
        const dataBaru = {
            ...data,
            uid: success.user.uid
        }

        // Simpan ke realtime Database
        FIREBASE.database()
        .ref('usersMebel/' + success.user.uid)
        .set(dataBaru);

        //Success
        dispatchSuccess(dispatch, REGISTER_MEBEL, dataBaru)

         // Simpan ke local storage(Async Storage)
         storeData('userMebel', dataBaru)

        })
        .catch((error) => {
         
            // Error
            dispatchError(dispatch, REGISTER_MEBEL, error.message)

            alert(error.message)
            });
    }
}

export const loginMebel = (email, password) => {
    return (dispatch) => {
        //LOADING
        dispatchLoading(dispatch, LOGIN_MEBEL)

        FIREBASE
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((success) => {
            //signed in
            FIREBASE.database().ref('/usersMebel/' + success.user.uid)
            .once('value')
            .then((resDB) => {

            if(resDB.val()) {
            //Success
            dispatchSuccess(dispatch, LOGIN_MEBEL, resDB.val())
    
            // Simpan ke local storage(Async Storage)
            storeData('userMebel', resDB.val())
            }else {
            // Error
            dispatch({
                type: "LOGIN_USER",
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: "Data User tidak ada"
                }
             })
             alert("Data User tidak ada")
            }

            })
        })
        .catch((error) => {
            // Error
             dispatchError(dispatch, LOGIN_MEBEL, error.message)

             alert(error.message)
        })
    }
}