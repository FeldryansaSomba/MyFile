import FIREBASE from '../config/FIREBASE'
import { storeData } from '../utils';

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";

export const registerUser = (data, password) => {
    return(dispatch) => {
         //LOADING
         dispatch({
            type: "REGISTER_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
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
        .ref('users/' + success.user.uid)
        .set(dataBaru);

        //Success
        dispatch({
            type: "REGISTER_USER",
            payload: {
                loading: false,
                data: dataBaru,
                errorMessage: false
            }
         })

         // Simpan ke local storage(Async Storage)
         storeData('user', dataBaru)

        })
        .catch((error) => {
         
            // Error
            dispatch({
               type: "REGISTER_USER",
               payload: {
                   loading: false,
                   data: false,
                   errorMessage: error.message
               }
            })
            alert(error.message)
            });
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        //LOADING
        dispatch({
            type: "LOGIN_USER",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        FIREBASE
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((success) => {
            //signed in
            FIREBASE.database().ref('/users/' + success.user.uid)
            .once('value')
            .then((resDB) => {

            if(resDB.val()) {
                //Success
            dispatch({
                type: "LOGIN_USER",
                payload: {
                    loading: false,
                    data: resDB.val(),
                    errorMessage: false
                }
             })
    
             // Simpan ke local storage(Async Storage)
             storeData('user', resDB.val())
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
            dispatch({
                type: "LOGIN_USER",
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
             })
             alert(error.message)
        })
    }
}
