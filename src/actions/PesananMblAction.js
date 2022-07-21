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
                    // console.log("data di getListPesananMbl:", data)
                   allLooping(data, id, dispatch);
                //    dispatch(allLooping(data, id))
                    // dispatchSuccess(dispatch, GET_PRODUK_PESANANMBL, data)
                })
                .catch((error) => {
                    
                    // dispatchError(dispatch, GET_PRODUK_PESANANMBL, error);
                    alert(error)
                })
        
    }
}

const allLooping = (getProdukResult, idMebel, dispatch) =>{

    let newArray = []
    Object.keys(getProdukResult).map((key) => {
        Object.keys(getProdukResult[key].produk).map((key2) => {
                Object.keys(getProdukResult[key].produk[key2]).map((key3) => {
                     if(getProdukResult[key].produk[key2][key3].uid != undefined && getProdukResult[key].produk[key2][key3].uid == idMebel ){
                        newArray.push({
                        idPesanan: key2,
                        idPembeli:getProdukResult[key].user,
                        idMebel: getProdukResult[key].produk[key2][key3].uid,
                        dataPesanan: getProdukResult[key].produk[key2],
                    })
                 } 

                    // console.log(
                    // "id pembeli:", getProdukResult[key].user,
                    // `id mebel:${getProdukResult[key].produk[key2][key3].uid}`
                    // )

                // console.log("id pesanan:", getProdukResult[key].produk.getAttribute()  )
                // console.log(`id mebel:${getProdukResult[key].produk[key2][key3].uid}`)

            })
        })
    })

    // console.log(newArray)
    if(newArray!==null){
    //    console.log(newArray)
        return (dispatchSuccess(dispatch, GET_PRODUK_PESANANMBL, newArray))
    }
}