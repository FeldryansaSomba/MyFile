import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const MASUK_KEPESANAN = "MASUK_KEPESANAN";
export const GET_LIST_PESANAN = "GET_LIST_PESANAN";

export const masukKePesanan = (data) => {
    return(dispatch) => {
        dispatchLoading(dispatch, MASUK_KEPESANAN);

        //Cek data pesanan user masuk atau tidak
        FIREBASE.database()
                .ref('pesanans/'+data.uid)
                .once('value', (querySnapshot) => {
                    console.log("cek pesanan :", querySnapshot.val())

                    if(querySnapshot.val()){
                        //update ke halaman pesanan
                        const pesananUtama = querySnapshot.val();
                        const noHpBaru = data.noHp
                        const kustomBaru = data.kustom
                        const alamatBaru = data.alamat
                        console.log("cek pesanan :", data.uid)
                        FIREBASE
                        .database()
                        .ref('pesanans')
                        .child(data.uid)
                        .update({
                            
                            noHpCS: pesananUtama.noHpCS + noHpBaru,
                            kustomCS: pesananUtama.kustomCS + kustomBaru,
                            alamatCS: pesananUtama.alamatCS + alamatBaru
                        })
                        .then((response) => {
                            console.log("Simpan pesanan :", response)
                            //simpan ke pesanan
                            dispatch(masukPesanan(data))
                        })
                        .catch((error) => {
                            dispatchError(dispatch, MASUK_KEPESANAN, error);
                            alert(error) 
                        })
                        
                    }else {

                    }
                        //simpan ke halaman pesanan
                        const pesanan = {
                            user: data.uid,
                            tanggal: new Date().toDateString(),
                            // harga: data.harga,
                            noHp: data.noHp,
                            kustom: data.kustom,
                            alamat: data.alamat

                        }
                        FIREBASE
                        .database()
                        .ref('pesanans')
                        .child(data.uid)
                        .set(pesanan)
                        .then((response) => {
                            //simpan ke pesanan
                            // dispatch(masukPesanan(data))
                        })
                        .catch((error) => {
                            dispatchError(dispatch, MASUK_KEPESANAN, error);
                            alert(error) 
                        })
                })
                .catch((error) => {
                    dispatchError(dispatch, MASUK_KEPESANAN, error);
                    alert(error)
                })
    }
}

export const masukPesanan = (data) => {
    return(dispatch) => {
        const pesanan = {
            product: data.produk,
            kustom: data.kustom,
            noHp: data.noHp,
            alamat: data.alamat
        }

        FIREBASE.database()
        .ref('pesanans/' + data.uid)
        .child('pesanan')
        .push(pesanan)
        .then((response) => {
     
        dispatchSuccess(dispatch, MASUK_KEPESANAN, response ? response : []);
        })
        .catch((error) => {
        dispatchError(dispatch, MASUK_KEPESANAN, error);
        alert(error);
        });
        
    }
}

export const getListPesanan = (id) => {
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