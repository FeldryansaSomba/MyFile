import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

// export const PROSES_PESANAN = "PROSES_PESANAN";
export const GET_PROSES_PESANAN = "GET_LIST_PESANAN";

export const getProsesPesananMbl = (idPesanan, idMebel, idPembeli) => {
    // console.log("id pesanan:",id)
    return (dispatch) => {
        dispatchLoading(dispatch, GET_PROSES_PESANAN);

            FIREBASE.database()
                .ref(`pesanans`)
                .once('value', (querySnapshot) => {
                    //Hasil
                    let data = querySnapshot.val();
                    // console.log("data di getListPesananMbl:", data)
                   allLooping(data, idPesanan, idMebel, idPembeli, dispatch);
                //    dispatch(allLooping(data, id))
                    // dispatchSuccess(dispatch, GET_PROSES_PESANAN, data)
                })
                .catch((error) => {
                    
                    // dispatchError(dispatch, GET_PROSES_PESANAN, error);
                    alert(error)
                })
        
    }
}

const allLooping = (getProsesPesananResult, idPesanan, idMebel, idPembeli, dispatch) =>{
    // console.log("id Pembeli:", idPembeli)
    // console.log("id Pesanan:", idPesanan)

    Object.keys(getProsesPesananResult).map((key) => {
        if(key == idPembeli){
                Object.keys(getProsesPesananResult[key].produk).map((key2) => {
                        if(key2 == idPesanan){
                            updateData({
                              allData:   getProsesPesananResult[key].produk[key2], 
                              dispatch:  dispatch,
                              idPembeli: idPembeli,
                              idPesanan: key2
                            })
                        }
                    })
            }
    })

}

const updateData = (data)=>{
    // console.log("update data:",data)
// console.log("id pembeli:", data.idPembeli)
// console.log("id pesanan:", data.idPesanan)

    const dataBaru = {
        alamat: data.allData.alamat,
        kayu: data.allData.kayu,
        lebar: data.allData.lebar,
        namaUser: data.allData.namaUser,
        noHp: data.allData.noHp,
        panjang: data.allData.panjang,
        product:{
            alamat: data.allData.product.alamat,
            desc: data.allData.product.desc,
            gambar: data.allData.product.gambar,
            harga: data.allData.product.harga,
            kayu: data.allData.product.kayu,
            lebar: data.allData.product.lebar,
            lokasi: data.allData.product.lokasi,
            nama: data.allData.product.nama,
            namaMebel: data.allData.product.namaMebel,
            noHp: data.allData.product.noHp,
            panjang: data.allData.product.panjang,
            status: "process",
            tinggi: data.allData.product.tinggi,
            uid: data.allData.product.uid,
            warna: data.allData.product.warna
        },
        tinggi: data.allData.tinggi,
        warna: data.allData.warna
    }

    FIREBASE.database()
            .ref(`pesanans/${data.idPembeli}/produk/${data.idPesanan}`)
            .update(dataBaru)
            .then((response) => {
                console.log("response status:",response)
            //Success
            dispatchSuccess(data.dispatch, GET_PROSES_PESANAN, response ? response : [])

            // Simpan ke local storage(Async Storage)
            // storeData('userMebel', dataBaru)
            })
            .catch((error) => {
                console.log("response status error:",error)

            // Error
            dispatchError(dispatch, GET_PROSES_PESANAN, error.message)
            
            alert("Data User tidak ada")
    })
}


// const allLooping = (getProsesPesananResult, idMebel, dispatch) =>{

//     let newArray = []
//     Object.keys(getProsesPesananResult).map((key) => {
//         Object.keys(getProsesPesananResult[key].produk).map((key2) => {
//                 Object.keys(getProsesPesananResult[key].produk[key2]).map((key3) => {
//                      if(getProsesPesananResult[key].produk[key2][key3].uid != undefined && getProsesPesananResult[key].produk[key2][key3].uid == idMebel ){
//                         newArray.push({
//                         idPesanan: key2,
//                         idPembeli:getProsesPesananResult[key].user,
//                         idMebel: getProsesPesananResult[key].produk[key2][key3].uid,
//                         dataPesanan: getProsesPesananResult[key].produk[key2],
//                     })
//                  } 
//             })
//         })
//     })

//     // console.log(newArray)
//     if(newArray!==null){
//     //    console.log(newArray)
//         return (dispatchSuccess(dispatch, GET_PROSES_PESANAN, newArray))
//     }
// }