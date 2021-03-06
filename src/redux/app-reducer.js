import {setAuthUser} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

const initializedSuccessAC = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => async (dispatch) => {
    await dispatch(setAuthUser());
    dispatch(initializedSuccessAC())
};

export default appReducer;