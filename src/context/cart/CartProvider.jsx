import CartContext from "./CartContext";
import { useReducer } from "react";
import cartReducer from "./cartReducer";
import { addCardItem, removeCardItem, clearCartItem } from "./cartFuntion";

const CartProvider = ({Children}) => {

    const initialState = {
        isCartOpen: false,
        cartItems: [],
        cartCount: 0,
        cartTotal: 0
    }
    const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, initialState)

    // Funcion para actualizar los productos en el reducer del carrito funcion acumuladora (metodo reduce)

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)

        dispatch({
            type: "SET_CART_ITEMS",
            payload: {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            }
        })
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCardItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCardItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const clearItemToCart = (cartItemToclear) => {
        const newCartItems = clearCardItem(cartItems, cartItemToClear)
        updateCartItemsReducer(newCartItems)
    }

    const clearItemFromCheckout = () => {
        dispatch({
            type: "CLEAR_CHECKOUT"
        })
    }

    const setIsCartOpen = (bool) => {
        dispatch({
            type: "SET_IS_CART_OPEN",
            payload: bool
        })
    }

  return (
    <CartContext.Provider value={{isCartOpen, cartItems, cartCount, cartTotal, addItemToCart, removeItemToCart, clearItemToCart, clearItemFromCheckout, setIsCartOpen}}>{Children}</CartContext.Provider>
  )
}

export default CartProvider