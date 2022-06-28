import FIREBASE from "../config/FIREBASE";
import { dispatchLoading, storeData, dispatchError, dispatchSuccess } from "../utils";

export const UPDATE_PROFILE_MEBEL = "UPDATE_PROFILE_MEBEL";
export const CHANGE_PASS_MEBEL = "CHANGE_PASS_MEBEL";

export const updateProfileMbl = (data) => {
    return (dispatch) => {
        //LOADING
        dispatchLoading(dispatch, UPDATE_PROFILE_MEBEL)

        const dataBaru = {
            uid: data.uid,
            nama: data.nama,
            noHp: data.noHp,
            email: data.email,
            status: 'userMebel',
            avatar: data.updateAvatar ? data.avatarForDB : data.avatarLama
        }

        FIREBASE.database()
                .ref('usersMebel/'+dataBaru.uid)
                .update(dataBaru)
                .then((response) => {
                //Success
                dispatchSuccess(dispatch, UPDATE_PROFILE_MEBEL, response ? response : [])
    
                // Simpan ke local storage(Async Storage)
                storeData('userMebel', dataBaru)
                })
                .catch((error) => {
                // Error
                dispatchError(dispatch, UPDATE_PROFILE_MEBEL, error.message)
                
                alert("Data User tidak ada")
        })
    }
}

export const changePassMbl = (data) => {
    return(dispatch) => {
        dispatchLoading(dispatch, CHANGE_PASS_MEBEL);

        //cek apakah email & pass benar (login)
        FIREBASE.auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((response) => {
            //jika sukses maka pass di update
            var user = FIREBASE.auth().currentUser;

            user.updatePassword(data.newPassword)
            .then(function () {
                //update sukses
                dispatchSuccess(dispatch, CHANGE_PASS_MEBEL, "Berhasil Ganti Kata Sandi Baru")

            })
            .catch(function (error) {
                //error
                dispatchError(dispatch, CHANGE_PASS_MEBEL, error)

                alert(error)
            })
        }).catch((error) => {
            //Error
            dispatchError(dispatch, CHANGE_PASS_MEBEL, error.message)

            alert(error.message)
        })

    }
}