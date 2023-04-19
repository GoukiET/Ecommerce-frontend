import "./CheckoutItem.scss"
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';


const CheckoutItem = ({cartItem, stock}) => {

   const {addItemToCart, removeItemToCart, clearItemToCart, cartCount} = useContext(CartContext)
  
   console.log(cartCount)
   console.log(cartItem)
  
   const clearHandler = () => clearItemToCart(cartItem)
   const addHandler = () => { if( quantity < stock )addItemToCart(cartItem)}
   const removeHandler = () => removeItemToCart(cartItem)

   const {albumName, bandName,price, img, quantity} = cartItem

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={img} alt={`${bandName}`} />
      </div>
      <span className="name">{albumName}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearHandler}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem;