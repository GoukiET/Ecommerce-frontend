import CartContext from "../../../context/cart/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import CartItem from "../cartItem/CartItem";
import "./CartDropDown.scss"

const CartDropDown = () => {

    const navigate = useNavigate()
    const {cartItems} = useContext(CartContext)

    const goToCheckout = () => {
        navigate("/checkout")
    }
  return (
    <>
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems ? (cartItems.map((cartItem) => (
                    <CartItem key={cartItem._id} cartItem={cartItem}/> 
                ))
                ) :
                    <span className="empty-message">Empty Cart</span>
                }
                <Button onClick={goToCheckout}>Ir a Checkout</Button>
            </div>
        </div>
    </>
  )
}

export default CartDropDown