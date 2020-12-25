import * as types from './actionTypes';

const initialState = {
  loading: false,
  isInternetConnected: true,
  cartlistLength: 0,
  wishlistLength: 0,
  errorMessage: '',
  isError: false,
  isopenDrawer: false,
  cartList: [],
  wishList: [],
  Login: [],
};

const global = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.API_LOADING_START:
      return { ...state, loading: true };
    case types.TOGGLE_DRAWER:
      return { ...state, isopenDrawer: action.payload };
    case types.API_LOADING_STOP:
      return { ...state, loading: false };

    case types.ON_ERROR_RECEIVED:
      return { ...state, loading: false, errorMessage: action.payload.message, isError: action.payload.type };


    case types.IS_INTERNET_CONNECTED:
      console.warn(action.payload);
      if (action.payload === false) {
        return { ...state, isInternetConnected: action.payload, loading: false };
      } else {
        return { ...state, isInternetConnected: action.payload };
      }
    case types.ADDTO_CART:
      let temp = state.cartList;
      let foundx = temp.find(element => element.id == action.payload.id && element.price.product_type == action.payload.price.product_type);
      //alert(foundx)
      if (foundx) {
        temp = temp.map(el => (
          el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
        ))
      }
      else {
        temp.push(action.payload);
      }

      //alert(temp.length)
      return { ...state, cartList: temp, cartlistLength: temp.length };

    case types.ADDTO_WISHLIST:
      const temp_wishlist = state.wishList;

      temp_wishlist.push(action.payload);

      return { ...state, wishList: temp_wishlist, wishlistLength: temp_wishlist.length };

    case types.INCREMENT:

      // let temp1 = state.cartList;
      // temp1[action.payload].qty = temp1[action.payload].qty+1;
      let newMarkers = state.cartList.map(el => (
        el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
      ))
      return { ...state, cartList: newMarkers };

    case types.DECREMENT:

      let nd = state.cartList.map(el => (
        el.id === action.payload.id ? { ...el, quantity: el.quantity - 1 } : el
      ))
      return { ...state, cartList: nd };

    case types.REMOVE_WISHLIST_ITEM:
      const filteredItems = state.wishList.filter(function (item) {
        return item !== action.payload;
      })
      //alert("REMOVE_WISHLIST_ITEM");
      return { ...state, wishList: filteredItems, wishlistLength: filteredItems.length };

    case types.REMOVE_CART_ITEM:
      const filteredItems1 = state.cartList.filter(function (item) {
        return item !== action.payload;
      })
      //alert("REMOVE_WISHLIST_ITEM");
      return { ...state, cartList: filteredItems1, cartlistLength: filteredItems1.length };

    case types.RESET_CART:
      //const resetCart = state.cartList = []
      // {
      //   return item !== action.payload;
      // })
      return { ...state, cartList: [], cartlistLength: 0, };

    case types.RESET_WISHLIST:
      //const resetCart = state.cartList = []
      // {
      //   return item !== action.payload;
      // })
      return { ...state, wishList: [], wishlistLength: 0 };

    case types.HOME_CART:

      return { ...state, cartList: action.payload, cartlistLength: action.payload.length };

    case types.HOME_WISHLIST:

      return { ...state, wishList: action.payload, wishlistLength: action.payload.length };

    default:
      return state;
  }
};

export default global;
