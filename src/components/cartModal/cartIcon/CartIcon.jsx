import { useContext } from "react";
import shopIcon from '../../../assets/images/Shopping.png'
import CartContext from "../../../context/cart/CartContext";
import './CartIcon.scss'

const CartIcon = () => {

    const {cartCount, isCartOpen, setIsCartOpen} = useContext(CartContext);

    const handleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={handleCartOpen}>
        <img src={shopIcon} className="shop-icon" />
        <div>
        <span className="item-count">{cartCount}</span>
        </div>
    </div>
  )
}

export default CartIcon;