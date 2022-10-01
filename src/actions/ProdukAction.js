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
            .once('value', (querySnapshot) => {

                
                //Hasil
                let data = querySnapshot.val();
                allLooping3(dispatch, data, idFilter)
            })
            .catch((error) => {
                
                dispatchError(dispatch, GET_PRODUK, error);
                alert(error)
            })
        }
        else if (keyword) {
            FIREBASE.database()
            .ref('produks')
            .once('value', (querySnapshot) => {
                let Objek = querySnapshot.val();
        
                filterObjLokasi(Objek, keyword, dispatch)
            })
            .catch((error) => {
                
                dispatchError(dispatch, GET_PRODUK, error);
                alert(error)
            })

        } else {
            FIREBASE.database()
                .ref('produks')
                .once('value', (querySnapshot) => {
                    //Hasil
                    let data = querySnapshot.val();

                    allLooping2(dispatch, data)
                    // dispatchSuccess(dispatch, GET_PRODUK, data)
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

export const getProdukMbl = (d) => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_PRODUK_MBL);
        FIREBASE.database()
                .ref('produks')
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val();

                    allLooping(data, d, dispatch);
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
        if(key == idMebel){
            newArray.push(getProdukMblResult[key])
        }
    })

    if(newArray!==null){
        return (dispatchSuccess(dispatch, GET_PRODUK_MBL, newArray))
    }
}
  const allLooping2 = (dispatch, data) =>{
    let newArray = []
    Object.keys(data).map((key) => {
        Object.keys(data[key]).map((key2) => {
            newArray.push(data[key][key2])
        })
    })
    if(newArray!==null){
        return (dispatchSuccess(dispatch, GET_PRODUK, newArray))
    }
}
  const allLooping3 = (dispatch, data, idFilter) =>{
    let newArray = []
    Object.keys(data).map((key) => {
        Object.keys(data[key]).map((key2) => {
            if(idFilter == data[key][key2].jenisProduk.toUpperCase()){
                newArray.push(data[key][key2])
            }
        })
    })
    if(newArray!==null){
        return (dispatchSuccess(dispatch, GET_PRODUK, newArray))
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

function filterObjLokasi(data, keyword, dispatch){
    const kataKunci = keyword.toUpperCase()
    let newArray = [];
    Object.keys(data).map((key) => {
        Object.keys(data[key]).map((key2) => {
            const { nama } = data[key][key2]; 
             let MyNama = nama.toUpperCase().split(" ")
             if (
                   nama === kataKunci ||
                   MyNama[0] === kataKunci|| 
                   MyNama[0]+' ' + MyNama[1] === kataKunci||
                   MyNama[0]+' ' + MyNama[1] + ' ' + MyNama[2] === kataKunci ||
                   MyNama[0]+' ' + MyNama[1] + ' ' + MyNama[2] + ' ' + MyNama[3] === kataKunci
                   ) { 
                   newArray.push(data[key][key2])
                } 
        })
    })
    
   return dispatchSuccess(dispatch, GET_PRODUK, newArray)

}





