import CartCard from "./CartCard";

export default function CartBox() {
  return (
    <div className="bg-[#F5F5F5] px-12 py-9 my-10 flex flex-col gap-y-7 max-w-[50rem] w-full h-fit">
      <CartCard />
      <CartCard />
      <CartCard />
    </div>
  );
}
