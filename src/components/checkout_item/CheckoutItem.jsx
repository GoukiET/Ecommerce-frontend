import "./CheckoutItem.scss"
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import Delete from '../../assets/images/delete.png';
import ArrowLeft from '../../assets/images/arrow-left.png';
import ArrowRight from '../../assets/images/arrow-right.png';

const CheckoutItem = ({cartItem, stock}) => {

   const {addItemToCart, removeItemToCart, clearItemToCart, cartCount} = useContext(CartContext)
  
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
          <img src={ArrowLeft} alt="" />
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addHandler}>
          <img src={ArrowRight} alt="" />
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearHandler}>
        <img src={Delete} alt="" />
      </div>
    </div>
  )
}

export default CheckoutItem;