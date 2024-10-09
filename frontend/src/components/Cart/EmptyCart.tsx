import emptycart from "../../assets/cart/emptycart.png";
export default function EmptyCart() {
  return (
    <div className="max-w-[1600px] w-full flex flex-col items-center justify-center mt-8 mb-40">
      <div className="max-w-[45rem] px-[5vw] sm:px-0 flex flex-col items-center gap-y-5">
        <div className="">
          <img src={emptycart} className="" />
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center ">
          <h2 className="font-Poppins font-medium text-2xl text-center">
            Your Cart is <span className="text-[#FF4A4A]">Empty!</span>
          </h2>
          <div className="text-sm sm:text-base text-center font-Poppins text-[#8C8C8C]">
            Looks like you have not added anything to your cart. You will find a
            lot of intresting products on our 'Shop Plants' page.
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-5 sm:flex-row w-full justify-evenly mt-5">
          <button className="bg-[#7AA262] max-w-[18rem] w-full py-3 rounded-full text-[#F3F3F3] font-medium font-Poppins text-center">
            Continue Shopping
          </button>
          <button className="bg-[#E8E8E8]  max-w-[18rem] w-full py-3 rounded-full  font-normal font-Poppins text-center">
            Go to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}
