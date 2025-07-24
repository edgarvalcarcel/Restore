import { Product } from "../../app/models/product"
type Props = { readonly products: Product[] }

export default function ProductList({products}: Props) {
    return (
    <ul>
        {products.map((item) => (
            <li key={item.id}>{item.name} - $ {item.price}</li>
        ))}
    </ul>
    )
}