import { WidgetItem } from "@/components";
import { Product, products } from "@/data/products";
import { ItemCard } from "@/shopping-cart/components/ItemCard";
import {cookies} from "next/headers"


export const metadata = {
 title: 'Productos del carrito',
 description: 'Productos del carrito',
};
interface ProductInCart{
    product: Product;
    quantity: number
}
const getProductsInCart =(cart:{ [id:string]:number}):ProductInCart[]=>{
    const productsInCart: ProductInCart[] = [];
    for(const id of Object.keys(cart)){
        const product = products.find(prod=> prod.id=== id);
        if(product){

            productsInCart.push({
                product,
                quantity: cart[id]
            });
        }
    }
    return productsInCart;
}
export default function CardPage() {
    const cookiesStore = cookies();
    const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as {[id:string]:number};
    const productInCart = getProductsInCart(cart);
    const totalToPay = productInCart.reduce( (total, item) => total + ( item.product.price * item.quantity ), 0 );
    console.log(productInCart);
  return (
    <div className="text-5xl ">
        <h1>Productos del carrito</h1>
        <hr  className="mb-2"/>
        <div className="flex flex-col sm:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full sm:w-8/12">
            { productInCart.map(({product, quantity})=>(
                <ItemCard key={product.id} product={ product }  quantity={quantity} />
            ))}
            </div>
            <div className="flex flex-col w-full sm:w-4/12">
                <WidgetItem titulo="Total a pagar">
                    <div className="mt-2 flex justify-center gap-4">
                        <h3 className="text-3xl font-bold text-gray-700">Total: ${(totalToPay* 1.15).toFixed(2)}</h3>

                    </div>
                    <span className="font-bold text-center text-gray-500 text-sm">Impuestos 15% ${(totalToPay* 0.15).toFixed(2)}</span>
                </WidgetItem>
            </div>
        </div>
    </div>
  );
}