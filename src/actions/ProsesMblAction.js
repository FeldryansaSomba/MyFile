import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

// export const PROSES_PESANAN = "PROSES_PESANAN";
export const GET_PROSES_PESANAN = "GET_LIST_PESANAN";

export const getProsesPesananMbl = (id) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_PROSES_PESANAN);

            FIREBASE.database()
                .ref(`pesanans`)
                .once('value', (querySnapshot) => {
                    //Hasil
                    let data = querySnapshot.val();
                    // console.log("data di getListPesananMbl:", data)
                   allLooping(data, id, dispatch);
                //    dispatch(allLooping(data, id))
                    // dispatchSuccess(dispatch, GET_PROSES_PESANAN, data)
                })
                .catch((error) => {
                    
                    // dispatchError(dispatch, GET_PROSES_PESANAN, error);
                    alert(error)
                })
        
    }
}

const allLooping = (getProsesPesananResult, idMebel, dispatch) =>{

    let newArray = []
    Object.keys(getProsesPesananResult).map((key) => {
        Object.keys(getProsesPesananResult[key].produk).map((key2) => {
                Object.keys(getProsesPesananResult[key].produk[key2]).map((key3) => {
                     if(getProsesPesananResult[key].produk[key2][key3].uid != undefined && getProsesPesananResult[key].produk[key2][key3].uid == idMebel ){
                        newArray.push({
                        idPesanan: key2,
                        idPembeli:getProsesPesananResult[key].user,
                        idMebel: getProsesPesananResult[key].produk[key2][key3].uid,
                        dataPesanan: getProsesPesananResult[key].produk[key2],
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
        return (dispatchSuccess(dispatch, GET_PROSES_PESANAN, newArray))
    }
}