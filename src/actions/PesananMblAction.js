import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_PRODUK_PESANANMBL = "GET_PRODUK_PESANANMBL";

export const getListPesananMbl = (id) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_PRODUK_PESANANMBL);

            FIREBASE.database()
                .ref(`pesanans`)
                .once('value', (querySnapshot) => {
                    //Hasil
                    let data = querySnapshot.val();
                   allLooping(data, id, dispatch);
                })
                .catch((error) => {
                    alert(error)
                })
        
    }
}

const allLooping = (getProdukResult, idMebel, dispatch) =>{

    
    let newArray = []
    Object.keys(getProdukResult).map((key) => {
        Object.keys(getProdukResult[key].produk).map((key2) => {
                Object.keys(getProdukResult[key].produk[key2]).map((key3) => {
                     if(getProdukResult[key].produk[key2][key3].uid == idMebel){
                        if(
                        getProdukResult[key].produk[key2][key3].uid != undefined 
                        && getProdukResult[key].produk[key2][key3].status == '-' 
                        || getProdukResult[key].produk[key2][key3].status == 'ditolak' 
                        ){
                            newArray.push({
                                idPesanan: key2,
                                idPembeli:getProdukResult[key].user,
                                idMebel: getProdukResult[key].produk[key2][key3].uid,
                                dataPesanan: getProdukResult[key].produk[key2],
                            })
                        }
                 } 
            })
        })
    })

    if(newArray!==null){
        return (dispatchSuccess(dispatch, GET_PRODUK_PESANANMBL, newArray))
    }
}


export const GET_TERIMA_PESANANMBL = "GET_TERIMA_PESANANMBL";


export const getTerimaPesananMbl = (id) => {

    const process = 'process'
    const selesai = 'selesai'
    return (dispatch) => {

        dispatchLoading(dispatch, GET_TERIMA_PESANANMBL);

            FIREBASE.database()
                .ref(`pesanans`)
                .once('value', (querySnapshot) => {
                    //Hasil
                    let data = querySnapshot.val();
                   allLooping2(data, id, process, selesai, dispatch);
                })
                .catch((error) => {
                    alert(error)
                })
        
    }
}

const allLooping2 = (getProdukResult, idMebel, process,selesai, dispatch) =>{

    let newArray = []
    Object.keys(getProdukResult).map((key) => {
        Object.keys(getProdukResult[key].produk).map((key2) => {
                Object.keys(getProdukResult[key].produk[key2]).map((key3) => {
                     if(getProdukResult[key].produk[key2][key3].uid == idMebel){
                            if(
                                getProdukResult[key].produk[key2][key3].uid != undefined 
                                && getProdukResult[key].produk[key2][key3].status == process
                                || getProdukResult[key].produk[key2][key3].status == selesai
                            ){
                                newArray.push({
                                idPesanan: key2,
                                idPembeli:getProdukResult[key].user,
                                idMebel: getProdukResult[key].produk[key2][key3].uid,
                                dataPesanan: getProdukResult[key].produk[key2],
                            })
                            }
                 } 
            })
        })
    })

    if(newArray!==null){
        return (dispatchSuccess(dispatch, GET_TERIMA_PESANANMBL, newArray))
    }
}
