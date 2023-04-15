import ProductContext from "./ProductContext"

const ProductProvider = ({children}) => {

    const msg = "Hola Muchacho!";
    return(
        <ProductContext.Provider value={{msg}}>{children}</ProductContext.Provider>
    )
}

export default ProductProvider;