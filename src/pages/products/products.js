import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { useSearchParams } from "react-router-dom"
import { Item } from "../../components/item"
import { useCart } from "../../context/cart"

const Products = () => {
    
    const [products, setProducts] = useState([]);
    const [query] = useSearchParams();
    const { addToCart } = useCart()



    useEffect(() => {
        const fetchProducts = async () => {
            
            const products =  await FakeStoreApi.fetchAllProducts();
            setProducts(products);
    
        }
        fetchProducts()
    }, [])

 
    return (
        <>
            <div className="container">
                <div className="products my-5">
                    <div className="grid">
                        {
                            products.map((product) => (
                                <Item key={product.id} data={product} addToCart={() => addToCart(product)} />
                            ))
                            }
                    </div>
                </div>
            </div>
        </>
    )
}

export { Products }
