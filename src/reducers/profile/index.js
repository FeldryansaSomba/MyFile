import { UPDATE_PROFILE, CHANGE_PASS } from '../../actions/ProfileAction'

const initialState = {
    updateProfileLoading: false,
    updateProfileResult: false,
    updateProfileError: false,

    changePassLoading: false,
    changePassResult: false,
    changePassError: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROFILE:
            return {
                ...state,
                updateProfileLoading: action.payload.loading,
                updateProfileResult: action.payload.data,
                updateProfileError: action.payload.errorMessage,
            };
        case CHANGE_PASS:
            return {
                ...state,
                changePassLoading: action.payload.loading,
                changePassResult: action.payload.data,
                changePassError: action.payload.errorMessage,
            };
            default:
                return state;
    }
}