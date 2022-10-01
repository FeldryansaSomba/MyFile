import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_PROSES_PESANAN = "GET_LIST_PESANAN";

export const getProsesPesananMbl = (idPesanan, idMebel, idPembeli, status) => {

    return (dispatch) => {
        dispatchLoading(dispatch, GET_PROSES_PESANAN);

            FIREBASE.database()
                .ref(`pesanans`)
                .once('value', (querySnapshot) => {
                    //Hasil
                    let data = querySnapshot.val();
                   allLooping(data, idPesanan, idMebel, idPembeli, dispatch, status);
                })
                .catch((error) => {
                    alert(error)
                })
        
    }
}

const allLooping = (getProsesPesananResult, idPesanan, idMebel, idPembeli, dispatch, status) =>{

    Object.keys(getProsesPesananResult).map((key) => {
        if(key == idPembeli){
                Object.keys(getProsesPesananResult[key].produk).map((key2) => {
                        if(key2 == idPesanan){
                            updateData({
                              allData:   getProsesPesananResult[key].produk[key2], 
                              dispatch:  dispatch,
                              idPembeli: idPembeli,
                              idPesanan: key2,
                            }, status)
                        }
                    })
            }
    })

}

const updateData = (data, status)=>{

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
            status: status,
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
            //Success
            dispatchSuccess(data.dispatch, GET_PROSES_PESANAN, response ? response : [])
            })
            .catch((error) => {
                console.log("response status error:",error)

            // Error
            dispatchError(dispatch, GET_PROSES_PESANAN, error.message)
            
            alert("Data User tidak ada")
    })
}
