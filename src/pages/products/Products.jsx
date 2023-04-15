import ProductContext from "../../context/product/ProductContext";
import { useContext } from "react";

const Products = () => {
    const {msg} = useContext(ProductContext);

    return (
        <div>
            <h1>{msg}</h1>
        </div>
    )
}

export default Products;