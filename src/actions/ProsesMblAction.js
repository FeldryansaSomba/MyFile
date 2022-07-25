import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const PROSES_PESANAN = "PROSES_PESANAN";
export const GET_LIST_PESANAN = "GET_LIST_PESANAN";

export const masukKePesanan = (data) => {
    return(dispatch) => {
        dispatchLoading(dispatch, PROSES_PESANAN);

        //Cek data pesanan user masuk atau tidak
        FIREBASE.database()
                .ref('pesanans/'+data.uid)
                .once('value', (querySnapshot) => {

                    if(querySnapshot.val()){
                        //update ke halaman pesanan
                        const pesananUtama = querySnapshot.val();
                        // const noHpBaru = data.noHp
                        // const kustomBaru = data.kustom
                        // const alamatBaru = data.alamat

                        FIREBASE
                        .database()
                        .ref('pesanans')
                        .child(data.uid)
                        .update({
                            // noHpCS: pesananUtama.noHpCS + noHpBaru,
                            // kustomCS: pesananUtama.kustomCS + kustomBaru,
                            // alamatCS: pesananUtama.alamatCS + alamatBaru
                        })
                        .then((response) => {
                            //simpan ke pesanan
                            dispatch(masukKerja(data))
                        })
                        .catch((error) => {
                            dispatchError(dispatch, PROSES_PESANAN, error);
                            alert(error) 
                        })
                        
                    }else {
                        //simpan ke halaman pesanan
                        const pesananUtama = {
                            user: data.uid,
                            tanggal: new Date().toDateString(),
                            namaUser: data.namaUser
                            // harga: data.harga,
                            // noHp: data.noHp,
                            // kustom: data.kustom,
                            // alamat: data.alamat
                        }
                        FIREBASE
                        .database()
                        .ref('pesanans')
                        .child(data.uid)
                        .set(pesananUtama)
                        .then((response) => {
                            //simpan ke pesanan
                            dispatch(masukKerja(data))
                        })
                        .catch((error) => {
                            dispatchError(dispatch, PROSES_PESANAN, error);
                            alert(error) 
                        })
                    };
            })
            .catch((error) => {
                dispatchError(dispatch, PROSES_PESANAN, error);
                alert(error)
            })
    };
};

export const masukKerja = (data) => {
    return(dispatch) => {
        const produk = {
            product: data.produk,
            panjang: data.panjang,
            lebar: data.lebar,
            tinggi: data.tinggi,
            warna: data.warna,
            kayu: data.kayu,
            noHp: data.noHp,
            alamat: data.alamat,
            namaUser: data.namaUser,
            catatan: data.catatan
        }

        FIREBASE.database()
        .ref('pesanans/' + data.uid)
        .child('produk')
        .push(produk)
        .then((response) => {
     
        dispatchSuccess(dispatch, PROSES_PESANAN, response ? response : []);
        })
        .catch((error) => {
        dispatchError(dispatch, PROSES_PESANAN, error);
        alert(error);
        });
        
    }
}

export const getPesananMbl = (id) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_LIST_PESANAN);

            FIREBASE.database()
                .ref('pesanans/'+id)
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val();

                    dispatchSuccess(dispatch, GET_LIST_PESANAN, data)
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_LIST_PESANAN, error);
                    alert(error)
                })
        
    }
}