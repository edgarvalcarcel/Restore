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
    setProducts([...products,
      { id: products.length + 1, title: `Product ${products.length + 1}`, price: (products.length + 1) * 100 }]);
  }


  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
      <button
        onClick={addProducts}>Add Product</button>
    </div>
  )
}

export default App
