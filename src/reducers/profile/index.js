import { UPDATE_PROFILE, CHANGE_PASS } from '../../actions/ProfileAction'
import { UPDATE_PROFILE_MEBEL, CHANGE_PASS_MEBEL } from '../../actions/ProfileMblAction';

const initialState = {
    updateProfileLoading: false,
    updateProfileResult: false,
    updateProfileError: false,

    updateProfileMblLoading: false,
    updateProfileMblResult: false,
    updateProfileMblError: false,

    changePassLoading: false,
    changePassResult: false,
    changePassError: false,

    changePassMblLoading: false,
    changePassMblResult: false,
    changePassMblError: false,
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

        case UPDATE_PROFILE_MEBEL:
            return {
                ...state,
                updateProfileMblLoading: action.payload.loading,
                updateProfileMblResult: action.payload.data,
                updateProfileMblError: action.payload.errorMessage,
            };

        case CHANGE_PASS:
            return {
                ...state,
                changePassLoading: action.payload.loading,
                changePassResult: action.payload.data,
                changePassError: action.payload.errorMessage,
            };

        case CHANGE_PASS_MEBEL:
            return {
                ...state,
                changePassMblLoading: action.payload.loading,
                changePassMblResult: action.payload.data,
                changePassMblError: action.payload.errorMessage,
                };

            default:
                return state;
    }
}