import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import ProductContext from "../context/product/ProductContext";
import UserContext from "../context/user/UserContext";

export default function Paypal() {
    const {cartTotal, clearItemFromCheckout, cartItems} = useContext(CartContext)
    const {reduceStock} = UserContext(ProductContext)
    return (
        <PayPalScriptProvider options={{ "client-id": "ENRCDKCE85J5A" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: cartTotal,
                                    currency: "USD"
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        reduceStock(cartItems)
                        clearItemFromCheckout()
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}