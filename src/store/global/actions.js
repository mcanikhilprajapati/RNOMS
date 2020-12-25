import * as types from './actionTypes'

export const apiLoadingStart = () => ({ type: types.API_LOADING_START });
export const apiLoadingStop = () => ({ type: types.API_LOADING_STOP });

export const noInternetConnected = (isConnected) => ({ type: types.IS_INTERNET_CONNECTED, payload: isConnected });
export const toggleDrawer = (isOpen) => ({ type: types.TOGGLE_DRAWER, payload: isOpen });
const defaultHeaders = { 'type': 'application/json' };


export const additemtocart = (params) => {
    return (dispatch) => {
        dispatch(addtoCart(params));
        // alert(JSON.stringify(params))
        // console.log("redux " + JSON.stringify(params))
        //dispatch(apiLoadingStop());
        // SuccessCallback({});
        //alert(JSON.stringify(params));


    }
};

export const additemtoWishlist = (params) => {
    return (dispatch) => {
        dispatch(addtowishlist(params));
        // alert(JSON.stringify(params))
        // console.log("redux " + JSON.stringify(params))
        //dispatch(toast(false,"Item added"));

    }
};

export const qtyIncrement = (index) => {
    return (dispatch) => {
        dispatch(qincrement(index));

    }
};
export const qtydecrement = (index) => {
    return (dispatch) => {
        dispatch(qdecrement(index));

    }
};

export const toast = (type, message) => {
    return (dispatch) => {
        dispatch(onError({ message: message, type: type }));
        setTimeout(() => {
            dispatch(onError({ message: "", type: false }));
        }, 3000)
    }
};

export const removeItemfromWhislist = (params) => {
    return (dispatch) => {
        dispatch(removewishlistitem(params));
    }
};
export const removeItemfromCart = (params) => {
    return (dispatch) => {
        dispatch(removecartlistitem(params));
        dispatch(toast(false, "Item removed"));

    }
};
export const resetCartItem = () => {
    return (dispatch) => {
        dispatch(resetcartlistitem());
        //dispatch(toast(false,"Item removed"));
    }
};
export const resetWishItem = () => {
    return (dispatch) => {
        dispatch(resetwishlistitem());
        //dispatch(toast(false,"Item removed"));
    }
};
export const homeCart = (data) => {
    return (dispatch) => {
        dispatch(homeCartItem(data));
        //dispatch(toast(false,"Item removed"));
    }
};
export const homeWishlist = (data) => {
    return (dispatch) => {
        dispatch(homeWishlistItem(data));
        //dispatch(toast(false,"Item removed"));
    }
};

const apiBedReqSuccess = (data) => ({ type: types.API_SUCCESS_BED_REQ, payload: data });
const apiDashboardReqSuccess = (data) => ({ type: types.API_SUCCESS_DESH_REQ, payload: data });
const onError = (data) => ({ type: types.ON_ERROR_RECEIVED, payload: data });
const apiWingList = (data) => ({ type: types.API_WING_LIST, payload: data });
const addtoCart = (data) => ({ type: types.ADDTO_CART, payload: data });
const addtowishlist = (data) => ({ type: types.ADDTO_WISHLIST, payload: data });
const qincrement = (data) => ({ type: types.INCREMENT, payload: data });
const qdecrement = (data) => ({ type: types.DECREMENT, payload: data });
const removewishlistitem = (data) => ({ type: types.REMOVE_WISHLIST_ITEM, payload: data });
const removecartlistitem = (data) => ({ type: types.REMOVE_CART_ITEM, payload: data });
const resetcartlistitem = () => ({ type: types.RESET_CART });
const resetwishlistitem = () => ({ type: types.RESET_WISHLIST });
const homeCartItem = (data) => ({ type: types.HOME_CART, payload: data });
const homeWishlistItem = (data) => ({ type: types.HOME_WISHLIST, payload: data });