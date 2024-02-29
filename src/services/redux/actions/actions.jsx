import { actionTypes } from "./action.types"

export const setProductAction = (products) =>{
    return{
        type: actionTypes.product.SET_PRODUCTS,
        data:products
    }
}

export const addProductAction = (product) =>{
    return{
        type: actionTypes.product.ADD_PRODUCT,
        data:product
    }
}

export const deleteProductAction = (productId) =>{
    return{
        type: actionTypes.product.DELETE_PRODUCT,
        data: productId
    }
}

export const addToCartAction = (product) =>{
    console.log("addToCartAction: ", product);
    return{
        type: actionTypes.cart.ADD_TO_CART,
        data:product
    }
}

export const removeFromCartAction = (productid) =>{
    return{
        type: actionTypes.cart.REMOVE_FROM_CART,
        data:productid
    }
}

export const decreaseProductQuantityAction = (productid) =>{
    console.log("productid: ", productid);
    return{
        type: actionTypes.cart.DECREASE_QUANTITY,
        data:productid
    }
}