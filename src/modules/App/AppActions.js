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
    return (dispatch) => {
        dispatch(eventWeb3("hallo", "haaaalloooooo"));
    }
}
