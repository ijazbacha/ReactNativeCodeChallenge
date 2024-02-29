import {actionTypes} from '../actions/action.types';

const initialState = {
  cartProducts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.cart.ADD_TO_CART:
      const existingProductIndex = state.cartProducts.findIndex(
        product => product.id == action.data.id,
      );
      if (existingProductIndex !== -1) {
        const updatedCartProducts = state.cartProducts.map((cartProduct) =>{
          if(cartProduct.id == action.data.id){
            return {...cartProduct, quantity:cartProduct.quantity+1}
          }
          return cartProduct
        })
        return {...state, cartProducts: updatedCartProducts};
      } else {
        const newProduct = {...action.data, quantity: 1};
        return {...state, cartProducts: [...state.cartProducts, newProduct]};
      }
    case actionTypes.cart.REMOVE_FROM_CART:
      const removedCartProducts = state.cartProducts.filter(
        product => product.id !== action.data,
      );
      return {...state, cartProducts: removedCartProducts};
    case actionTypes.cart.DECREASE_QUANTITY:
      console.log("action.data.id: ", action.data);
      const decreasedCartProducts = state.cartProducts.map(product => {
        if (product.id === action.data && product.quantity > 1) {
          return {...product, quantity: product.quantity - 1};
        }
        return product;
      });
      return {...state, cartProducts: decreasedCartProducts};
    case actionTypes.product.DELETE_PRODUCT:
      const deleteCartProducts = state.cartProducts.filter(
        product => product.id !== action.data,
      );
      return {...state, cartProducts: deleteCartProducts};
    default:
      return state;
  }
};

export default cartReducer;
