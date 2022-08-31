import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_PRODUK = "GET_PRODUK";
export const GET_PRODUK_MBL = "GET_PRODUK_MBL;"
export const GET_PRODUK_BY_FILTER = "GET_PRODUK_BY_FILTER";
export const DELETE_PARAMETER_FILTER = "DELETE_PARAMETER_FILTER";
export const SAVE_KEYWORD_PRODUK = "SAVE_KEYWORD_PRODUK";

export const getProduk = (idFilter, keyword) => {
    return (dispatch) => {

        console.log("id filter:",idFilter)
        dispatchLoading(dispatch, GET_PRODUK);

        if(idFilter){
            FIREBASE.database()
            .ref('produks')
            // .orderByChild('produk')
            // .equalTo(idFilter)
            .once('value', (querySnapshot) => {

                
                //Hasil
                let data = querySnapshot.val();
                allLooping3(dispatch, data, idFilter)

                // console.log("data filter:",data)

                // dispatchSuccess(dispatch, GET_PRODUK, data)
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

                    // console.log("data product action:",data)
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

                    // console.log("data di get produk mbl:",data)
                    // dispatchSuccess(dispatch, GET_PRODUK_MBL, data)
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
        //   console.log("data di all looping:",data[key][key2])
            newArray.push(data[key][key2])
        })
    })
    if(newArray!==null){
        return (dispatchSuccess(dispatch, GET_PRODUK, newArray))
    }
}
  const allLooping3 = (dispatch, data, idFilter) =>{
    let newArray = []
    console.log("id filter di allooping 3:",idFilter)
    Object.keys(data).map((key) => {
        Object.keys(data[key]).map((key2) => {
            if(idFilter == data[key][key2].jenisProduk.toUpperCase()){
                newArray.push(data[key][key2])
            }
        })
    })
    console.log("new array:",newArray)
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
// export const getProdukByFilter = (filter) =>{
    
//     return ({
//         type: GET_PRODUK_BY_FILTER,
//         payload: {
//             idFilter: filter,
//             // namaProduk: namaProduk
//         }
//     })  
// } 


export const deleteParameterFilter = () => ({
    type: DELETE_PARAMETER_FILTER,
})

export const saveKeywordProduk = (search) => ({
    type: SAVE_KEYWORD_PRODUK,
    payload: {
        data: search
    }
})

function filterObjLokasi(data, kataKunci, dispatch){
    let newArray = [];
    Object.keys(data).map((key) => {
        Object.keys(data[key]).map((key2) => {
            const { nama } = data[key][key2]; 
             let MyNama = nama.split(" ")

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





