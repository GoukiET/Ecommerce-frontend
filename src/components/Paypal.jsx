import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import ProductContext from "../context/product/ProductContext";


export default function Paypal() {
    const {cartTotal, clearItemFromCheckout, cartItems} = useContext(CartContext)
    const {reduceStock} = useContext(ProductContext)
    return (
        <PayPalScriptProvider options={{ "client-id": "AaaGQSRSGlewsnuyl9M7ymZ_wkioDhF4v_F8UzivCcOGy_BzjHOc9XBv2qKxQ0thsssbpNdN0H6sin0e" }}>
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