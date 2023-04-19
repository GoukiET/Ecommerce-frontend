import "./CartItem.scss"

const CartItem = ({cartItem}) => {

    const {img, albumName, quantity, price} = cartItem
 
  return (
    <div className="cart-item-container">
        <img src={img} alt={"name"}/>
        <div className="item-details">
            <span className="name">{albumName}</span>
            <span className="price">{quantity} x {price}</span>
        </div>

    </div>
  )
}

export default CartItem