import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, storeData, dispatchError, dispatchSuccess } from '../utils';

export const TAMBAH_PRODUK = "TAMBAH_PRODUK"

export const addProduk = (data) => {
    return (dispatch) => {
        //LOADING
        dispatchLoading(dispatch, TAMBAH_PRODUK)
        // const {uid} = data.uid
        const dataBaru = {
            uid: data.uid,
            gambar: [data.updateGambar ? data.gambarForDB : data.gambarLama],
            nama: data.nama,
            harga: data.harga,
            namaMebel: data.namaMebel,
            noHp: data.noHp,
            panjang: data.panjang,
            lebar: data.lebar,
            tinggi: data.tinggi,
            warna: data.warna,
            kayu: data.kayu,
            desc: data.desc,
            lokasi: data.lokasi,
            alamat: data.alamat,
            jenisProduk: data.jenisProduk,
            status: '',
        }

        FIREBASE.database()
                .ref('produks/'+dataBaru.uid)
                .update(dataBaru)
                .then((response) => {
                //Success
                dispatchSuccess(dispatch, TAMBAH_PRODUK, response ? response : [])
    
                // Simpan ke local storage(Async Storage)
                storeData('userMebel')
                })
                .catch((error) => {
                // Error
                dispatchError(dispatch, TAMBAH_PRODUK, error.message)
                
                alert("Data User tidak ada")
        })
    }
}