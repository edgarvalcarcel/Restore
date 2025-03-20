const products = [
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
]
function App() {

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
      </div>
  )
}

export default App
