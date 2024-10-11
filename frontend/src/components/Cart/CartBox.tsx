import { useCart } from "../../hooks/useCart";
import CartCard from "./CartCard";
import { cartProductsType } from "./ProductsCart";
type cardBoxPropsType = {
  productsInCart: cartProductsType[];
  setProductsInCart: React.Dispatch<React.SetStateAction<cartProductsType[]>>;
};
export default function CartBox({
  productsInCart,
  setProductsInCart,
}: cardBoxPropsType) {
  const { handleDeleteFromCart } = useCart();
  const handleIncrement = (productId: number) => {
    const updatedProducts = productsInCart.map((item) =>
      item.id === productId && item.count >= 0
        ? { ...item, count: item.count + 1 }
        : item
    );
    setProductsInCart(updatedProducts);
  };
  const handleDecrement = (productId: number) => {
    const updatedProducts = productsInCart.map((item) =>
      item.id === productId && item.count > 0
        ? { ...item, count: item.count - 1 }
        : item
    );
    setProductsInCart(updatedProducts);
  };
  const handleDelete = (productId: number) => {
    handleDeleteFromCart(productId);
  };
  return (
    <div className="bg-[#F5F5F5] px-12 py-9 my-10 flex flex-col gap-y-7 max-w-[50rem] w-full h-fit">
      {productsInCart.map((product) => (
        <CartCard
          key={product.id}
          product={product}
          handleIncrement={() => handleIncrement(product.id)}
          handleDecrement={() => handleDecrement(product.id)}
          handleDelete={() => handleDelete(product.id)}
        />
      ))}
    </div>
  );
}
