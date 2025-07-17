import {useEffect, useState} from "react";
import { Product } from "../../models/product";

function App() {

    const [products,
        setProducts] = useState < Product[] > ([]);
    useEffect(() => {
        fetch('https://localhost:5001/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addProducts = () => {
        setProducts(prevState => [...prevState, 
        {
            id: prevState.length + 1,
            name: 'product' +(prevState.length + 1),
            price: (prevState.length * 100) + 100,
            quantityInStock: 100,
            description: 'description',
            pictureUrl: 'https://picsum.photos/200',
            type: 'type',
            brand: 'brand'
        }])
    }

    return (
        <div>
            <h1>Re-Store</h1>
            <button onClick={addProducts}>Add Product</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                        - ${product.price}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default App
