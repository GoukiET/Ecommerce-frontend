
import "./Checkout.scss";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import CheckoutItem from "../../components/checkout_item/CheckoutItem";
import Paypal from "../../components/Paypal";

const Checkout = () => {

    const {cartItems, cartTotal} = useContext(CartContext)

  return (
    <div className="checkout-container">
    <div className="checkout-header">
      <div className="header-block">
        <span>Producto</span>
      </div>
      <div className="header-block">
        <span>Descripción</span>
      </div>
      <div className="header-block">
        <span>Cantidad</span>
      </div>
      <div className="header-block">
        <span>Precio</span>
      </div>
      <div className="header-block">
        <span>Remover</span>
      </div>
    </div>
    { cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem._id} cartItem={cartItem} stock={cartItem.stock}/>
    ))}
    <span className="total">Total: ${cartTotal}</span>

    {cartItems.length ? <Paypal /> : null}
    
  
  </div>
  );
};

export default Checkout;
