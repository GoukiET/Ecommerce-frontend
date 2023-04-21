import ProductContext from "../../context/product/ProductContext";
import { useContext, useEffect } from "react";
import CardProducts from "../../components/cardProducts/CardProducts";


const Products = () => {
    const {getProducts, products} = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async() => {
            await getProducts()
        }
        fetchProducts()
    }, []);

    return (
        <div>
            <div className="bg-white">
                <div className="max-w-2x1 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7x1 lg:pg-8">
                    <h2 className="text-2x1 font-extrabold tracking-tight text-gray-900">
                        Nuestro Catálogo
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <CardProducts key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;