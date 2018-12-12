import Web3 from 'web3';
// Export Constants
export const SET_WEB3 = 'SET_WEB3';
export const APP_ERROR = 'APP_ERROR';

// Export Actions
export function eventWeb3(web3, anfrContract) {
  return {
    type: SET_WEB3,
    web3,
    anfrContract
  };
}

export function errorApp(statusCode, type, title, message) {
    return {
        type: APP_ERROR,
        statusCode,
        errorType: type,
        title,
        message
    };
}


export function setWeb3() {
    return async (dispatch) => {
        let web3;
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Acccounts now exposed
            } catch (error) {
                // User denied account access...
                dispatch(errorApp(400, "denied", "Denied access", "MetaMask access was denied by the user"));
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
            // Acccounts always exposed
        }
        // Non-dapp browsers...
        else {
            dispatch(errorApp(400, "notFound", "MetaMask not found", "MetaMask is not install on this browser"));
        }

        dispatch(eventWeb3(web3, "a"));
    }
}
