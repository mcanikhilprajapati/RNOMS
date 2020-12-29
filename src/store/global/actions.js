import * as types from './actionTypes';

export const noInternetConnected = (isConnected) => ({type: types.IS_INTERNET_CONNECTED, payload: isConnected});


export const addItemtoCart = (params) => {
    return (dispatch) => {
        dispatch({type: types.ADDTO_CART, payload: params});

    };
};
export const addProduct = (params) => {
    return (dispatch) => {
        dispatch({type: types.NEW_PRODUCT, payload: params});
    };
};
export const removeProductByID = (params) => {
    return (dispatch) => {
        dispatch({type: types.REMOVE_CART_ITEM, payload: params});
    };
};

export const toast = (type, message) => {
    return (dispatch) => {
        dispatch(onError({message: message, type: type}));
        setTimeout(() => {
            dispatch(onError({message: '', type: false}));
        }, 3000);
    };
};

const onError = (data) => ({type: types.ON_ERROR_RECEIVED, payload: data});



