import { Alert } from "react-native";
import FIREBASE from "../config/FIREBASE";
import { dispatchLoading, storeData, dispatchError, dispatchSuccess } from "../utils";

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const CHANGE_PASS = "CHANGE_PASS";

export const updateProfile = (data) => {
    return (dispatch) => {
        //LOADING
        dispatchLoading(dispatch, UPDATE_PROFILE)

        const dataBaru = {
            uid: data.uid,
            nama: data.nama,
            noHp: data.noHp,
            email: data.email,
            status: 'user',
            avatar: data.updateAvatar ? data.avatarForDB : data.avatarLama
        }

        FIREBASE.database()
                .ref('users/'+dataBaru.uid)
                .update(dataBaru)
                .then((response) => {
                //Success
                dispatchSuccess(dispatch, UPDATE_PROFILE, response ? response : [])
    
                // Simpan ke local storage(Async Storage)
                storeData('user', dataBaru)
                })
                .catch((error) => {
                // Error
                dispatchError(dispatch, UPDATE_PROFILE, error.message)
                
                alert("Data User tidak ada")
        })
    }
}

export const changePass = (data) => {
    return(dispatch) => {
        dispatchLoading(dispatch, CHANGE_PASS);

        //cek apakah email & pass benar (login)
        FIREBASE.auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((response) => {
            //jika sukses maka pass di update
            var user = FIREBASE.auth().currentUser;

            user.updatePassword(data.newPassword)
            .then(function () {
                //update sukses
                dispatchSuccess(dispatch, CHANGE_PASS, "Berhasil Ganti Kata Sandi Baru")

            })
            .catch(function (error) {
                //error
                dispatchError(dispatch, CHANGE_PASS, error)

                alert(error)
            })
        }).catch((error) => {
            //Error
            dispatchError(dispatch, CHANGE_PASS, error.message)

            alert(error.message)
        })

    }
}