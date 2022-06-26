import { GET_FILTER} from '../../actions/FilterAction'

const initialState = {
    getFilterLoading: false,
    getFilterResult: false,
    getFilterError: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FILTER:
            return {
                ...state,
                getFilterLoading: action.payload.loading,
                getFilterResult: action.payload.data,
                getFilterError: action.payload.errorMessage,
            };
            default:
                return state;
    }
}