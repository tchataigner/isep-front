// Import Actions
import { SET_WEB3, APP_ERROR } from './AppActions';
// Initial State
const initialState = {
    web3: {},
    anfrContract: {},
    err: {}
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEB3:
            return {
                web3: action.web3,
                anfrContract: action.anfrContract,
                err: {}
            };
        case APP_ERROR:
            return {
                web3: state.web3,
                anfrContract: state.anfrContract,
                err: { type: action.errorType, statusCode: action.statusCode, error: action.message }
            };
        default:
            return state;
    }
};

/* Selectors */

// Get showAddPost
export const getWeb3 = state => state.app.web3;
export const getContract = state => state.app.anfrContract;
export const getAppError = state => state.app.err;

// Export Reducer
export default AppReducer;