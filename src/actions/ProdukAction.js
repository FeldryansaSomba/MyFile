import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_PRODUK = "GET_PRODUK";
export const GET_PRODUK_MBL = "GET_PRODUK_MBL;"
export const GET_PRODUK_BY_FILTER = "GET_PRODUK_BY_FILTER";
export const DELETE_PARAMETER_FILTER = "DELETE_PARAMETER_FILTER";
export const SAVE_KEYWORD_PRODUK = "SAVE_KEYWORD_PRODUK";

export const getProduk = (idFilter, keyword) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_PRODUK);

        if(idFilter){
            FIREBASE.database()
            .ref('produks')
            .orderByChild('produk')
            .equalTo(idFilter)
            .once('value', (querySnapshot) => {

                //Hasil
                let data = querySnapshot.val();

                dispatchSuccess(dispatch, GET_PRODUK, data)
            })
            .catch((error) => {
                
                dispatchError(dispatch, GET_PRODUK, error);
                alert(error)
            })
        }
        else if (keyword) {
            console.log("keyword :", keyword)
          //Edson
            FIREBASE.database()
            .ref('produks')
            // .orderByChild('lokasi')
            // .equalTo(keyword)
            .once('value', (querySnapshot) => {
                let Objek = querySnapshot.val();
                console.log("data:",Objek)
        
                filterObjLokasi(Objek, keyword, dispatch)


                // dispatchSuccess(dispatch, GET_PRODUK, data)
            })
            .catch((error) => {
                
                dispatchError(dispatch, GET_PRODUK, error);
                alert(error)
            })
          
            // FIREBASE.database()
            // .ref('produks')
            // .orderByChild('nama')
            // .equalTo(keyword)
            // .once('value', (querySnapshot) => {
            //     //Hasil
            //     let data = querySnapshot.val();

            //     dispatchSuccess(dispatch, GET_PRODUK, data)
            // })
            // .catch((error) => {
                
            //     dispatchError(dispatch, GET_PRODUK, error);
            //     alert(error)
            // })
        } else {
            FIREBASE.database()
                .ref('produks')
                .once('value', (querySnapshot) => {
                    // console.log("query else:",querySnapshot.val())
                    //Hasil
                    let data = querySnapshot.val();

                    dispatchSuccess(dispatch, GET_PRODUK, data)
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_PRODUK, error);
                    alert(error)
                })
        }

        FIREBASE.database()
                .ref('produks')
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val();

                    dispatchSuccess(dispatch, GET_PRODUK, data)
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_PRODUK, error);
                    alert(error)
                })
    }
}

export const getProdukMbl = () => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_PRODUK_MBL);

        FIREBASE.database()
                .ref('produks')
                .child(data.uid)
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val();

                    // dispatchSuccess(dispatch, GET_PRODUK_MBL, data)
                    allLooping(data, id, dispatch);
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_PRODUK_MBL, error);
                    alert(error)
                })
    }
  }

  const allLooping = (getProdukMblResult, idMebel, dispatch) =>{

    let newArray = []
    Object.keys(getProdukMblResult).map((key) => {
        Object.keys(getProdukMblResult[key].produk).map((key2) => {
                Object.keys(getProdukMblResult[key].produk[key2]).map((key3) => {
                     if(getProdukMblResult[key].produk[key2][key3].uid != undefined && getProdukMblResult[key].produk[key2][key3].uid == idMebel ){
                        newArray.push({
                        idMebel: getProdukMblResult[key].produk[key2][key3].uid,
                        dataPesanan: getProdukMblResult[key].produk[key2],
                    })
                 } 
            })
        })
    })

    if(newArray!==null){
        return (dispatchSuccess(dispatch, GET_PRODUK_PESANANMBL, newArray))
    }
}

export const getProdukByFilter = (id, namaProduk) => ({
    type: GET_PRODUK_BY_FILTER,
    payload: {
        idFilter: id,
        namaProduk: namaProduk
    }
})

export const deleteParameterFilter = () => ({
    type: DELETE_PARAMETER_FILTER,
})

export const saveKeywordProduk = (search) => ({
    type: SAVE_KEYWORD_PRODUK,
    payload: {
        data: search
    }
})

function filterObjLokasi(Objek, kataKunci, dispatch) { 
    const hasil = {}; 
    for (const key in Objek) { 
      // console.log("key:",key)
      const { nama } = Objek[key]; 
      
      let MyNama = nama.split(" ")

      if (
        nama === kataKunci ||
        MyNama[0] === kataKunci|| 
        MyNama[0]+' ' + MyNama[1] === kataKunci||
        MyNama[0]+' ' + MyNama[1] + ' ' + MyNama[2] === kataKunci ||
        MyNama[0]+' ' + MyNama[1] + ' ' + MyNama[2] + ' ' + MyNama[3] === kataKunci
        ) { 
        hasil[key] = Objek[key]; 
      } 
    } 
    // console.log({ hasil });
    // console.log("hasil:",hasil);

    // const {hasil} = hasil
    // return hasil;
   return dispatchSuccess(dispatch, GET_PRODUK, hasil)

  }

