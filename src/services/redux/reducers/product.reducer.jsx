import { actionTypes } from "../actions/action.types"

const initialState = {
    products:[]
}

const productReducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.product.SET_PRODUCTS:
            return {...state, products:action.data}
        case actionTypes.product.ADD_PRODUCT:
            return {...state, products:[action.data, ...state.products]}
        case actionTypes.cart.ADD_TO_CART:
            const updatedProducts = state.products.map(product => {
                if (product.id === action.data.id) {
                    return { ...product, addedToCart: true, quantity:product?.quantity ? product?.quantity + 1 : 1 };
                }
                return product;
            });
            return {...state, products: updatedProducts};
        case actionTypes.cart.REMOVE_FROM_CART:
            const updatedProductsWhenRemove = state.products.map(product => {
                if (product.id === action.data) {
                    return { ...product, addedToCart: false, quantity:0 };
                }
                return product;
            });
            return {...state, products: updatedProductsWhenRemove};
        case actionTypes.cart.DECREASE_QUANTITY:
            const decreasedProductQuantity = state.products.map(product => {
                if (product.id === action.data && product.quantity > 1) {
                    return {...product, quantity: product.quantity - 1};
                }
                return product;
            });
            return {...state, products: decreasedProductQuantity};
        case actionTypes.product.DELETE_PRODUCT:
            const deleteCartProducts = state.products.filter(
                product => product.id !== action.data,
            );
            return {...state, products: deleteCartProducts};
        default :
          return state
    }
}

export default productReducer