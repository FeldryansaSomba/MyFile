import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_PRODUK = "GET_PRODUK";
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
        //     console.log("keyword :", keyword)
        //   //Edson
        //     FIREBASE.database()
        //     .ref('produks')
        //     // .orderByChild('lokasi')
        //     // .equalTo(keyword)
        //     .once('value', (querySnapshot) => {
        //         let data = querySnapshot.val();
        //         console.log("data:",data)
        //         //filter
        //         Object.keys(data).map((key) => {
        //             console.log("key:",key[1]);
        //         //    Object.keys(key).map((a, b)=>{
        //         //             console.log("a:",a, b)
        //         //     })
        //             // return <CardProduk key={key} produk={getProdukResult[key]} navigation={navigation}/>
        //         })

        //         // dispatchSuccess(dispatch, GET_PRODUK, data)
        //     })
        //     .catch((error) => {
                
        //         dispatchError(dispatch, GET_PRODUK, error);
        //         alert(error)
        //     })
          
            FIREBASE.database()
            .ref('produks')
            .orderByChild('lokasi')
            .equalTo(keyword)
            .once('value', (querySnapshot) => {
                //Hasil
                let data = querySnapshot.val();

                dispatchSuccess(dispatch, GET_PRODUK, data)
            })
            .catch((error) => {
                
                dispatchError(dispatch, GET_PRODUK, error);
                alert(error)
            })
        } else {
            FIREBASE.database()
                .ref('produks')
                .once('value', (querySnapshot) => {
                    console.log("query else:",querySnapshot.val())
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

