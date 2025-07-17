import { Product } from "../../app/models/product";

type Props={
  products: Product[];
  addProduct: () => void;
}
export default function Catalog(props: Readonly<Props>) {
  return (
    <>
      <ul>
        {props.products.map((item, index) => (
          <li key={index}>{item.name} - $ {item.price}</li>
        ))}
      </ul>
      <button onClick={props.addProduct}>Add Product</button>
    </>
  )
}