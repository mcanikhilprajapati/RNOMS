import * as types from './actionTypes';

const initialState = {
    loading: false,
    isInternetConnected: true,
    errorMessage: '',
    isError: false,
    products: [],
    cart: [],
};

const global = (state = initialState, action) => {

    switch (action.type) {
        case types.API_LOADING_START:
            return {...state, loading: true};

        case types.API_LOADING_STOP:
            return {...state, loading: false};

        case types.ON_ERROR_RECEIVED:
            return {...state, loading: false, errorMessage: action.payload.message, isError: action.payload.type};
        case types.IS_INTERNET_CONNECTED:
            console.warn(action.payload);
            if (action.payload === false) {
                return {...state, isInternetConnected: action.payload, loading: false};
            } else {
                return {...state, isInternetConnected: action.payload};
            }
        case types.ADDTO_CART:
            let cart = state.cart;
            cart.push(action.payload);
            return {...state, cart: cart};

        case types.NEW_PRODUCT:
            let prod = state.products;
            let item = {
                id: prod.length + 1,
                ...action.payload,
            };
            prod.push(item);
            return {...state, products: prod};

        case types.INCREMENT:
            return {...state};
        case types.DECREMENT:
            return {...state};
        case types.REMOVE_CART_ITEM:
            var filteredAry = state.cart.filter(function (e) {
                return e !== action.payload;
            });
            return {...state, cart: filteredAry};
        case types.RESET_CART:
            return {...state, cartList: []};

        default:
            return state;
    }
};

export default global;
