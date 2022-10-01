// import FIREBASE from '../config/FIREBASE'
// import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

// export const GET_FILTER = "GET_FILTER";


// export const getFilter = () => {
//     return (dispatch) => {

//         dispatchLoading(dispatch, GET_FILTER);

//             FIREBASE.database()
//                 .ref('filter')
//                 .once('value', (querySnapshot) => {

//                     //Hasil
//                     let data = querySnapshot.val();

//                     dispatchSuccess(dispatch, GET_FILTER, data)
//                 })
//                 .catch((error) => {
                    
//                     dispatchError(dispatch, GET_FILTER, error);
//                     alert(error)
//                 })
        
//     }
// }

import FIREBASE from '../config/FIREBASE'
import { dispatchLoading, dispatchError, dispatchSuccess } from '../utils';

export const GET_FILTER = "GET_FILTER";


export const getFilter = () => {
    return (dispatch) => {

        dispatchLoading(dispatch, GET_FILTER);

            FIREBASE.database()
                .ref('produks')
                .once('value', (querySnapshot) => {

                    //Hasil
                    let data = querySnapshot.val();

                    allLooping2(dispatch, data)

                    // dispatchSuccess(dispatch, GET_FILTER, data)
                })
                .catch((error) => {
                    
                    dispatchError(dispatch, GET_FILTER, error);
                    alert(error)
                })
        
    }
}

const allLooping2 = (dispatch, data) =>{
    let newArray = []
    Object.keys(data).map((key) => {
        Object.keys(data[key]).map((key2) => {
            newArray.push(data[key][key2].jenisProduk.toUpperCase())
        })
    })

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
    if(newArray!==null){
  
        return (dispatchSuccess(dispatch, GET_FILTER, removeDuplicates(newArray)))
    }
}
