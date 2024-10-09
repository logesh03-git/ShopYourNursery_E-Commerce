import CartBox from "./CartBox";
import OrderSummary from "./OrderSummary";

export default function ProductsCart() {
  return (
    <div className="flex gap-x-10 w-full justify-center items-start">
      <CartBox />
      <OrderSummary />
    </div>
  );
}
