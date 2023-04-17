import ProductContext from "./ProductContext";
import { useReducer } from "react";
import productReducer from "./productReducer";

const ProductProvider = ({children}) => {

    const initialState = {
        products: [],
        product: [{
            id: "",
            albumName: "",
            bandName: "",
            price:"" ,
            format: "",
            img: "",
            SKU: "",
            stock: ""
        }]
    }

    const [productState, dispatch] = useReducer(x, initialState);

    const getProducts = async() => {
        const products = await axiosClient.get("/products")
    }
    return(
        <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
    )
}

export default ProductProvider;