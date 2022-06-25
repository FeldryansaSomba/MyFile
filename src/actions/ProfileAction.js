import FIREBASE from "../config/FIREBASE";
import { dispatchLoading, storeData, dispatchError, dispatchSuccess } from "../utils";

export const UPDATE_PROFILE = "UPDATE_PROFILE";

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