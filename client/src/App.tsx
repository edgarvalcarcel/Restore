import { useState } from "react";

function App() {
  type Product = {
    id: number;
    title: string;
    price: number;
  };

  const [products, setProducts]  = useState<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      title: 'Product 2',
      price: 200,
    },
    {
      id: 3,
      title: 'Product 3',
      price: 300,
    },
  ]);
  const addProducts = () => {
    setProducts(prevState => [...prevState,
      { id: prevState.length + 1, title: `Product ${prevState.length + 1}`, price: (prevState.length + 1) * 100 }]);
  }


  return (
    <div>
      <h1>Re-Store</h1>
      <button
        onClick={addProducts}>Add Product</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default App
