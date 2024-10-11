import { useState } from "react";
import Favorite from "../../svgIcons/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { productProps } from "../../constants/products";
import { useCart } from "../../hooks/useCart";
type propsType = {
  productDetails: productProps;
};
export default function FeaturedCard({ productDetails: product }: propsType) {
  const { cart: _, handleAddToCart } = useCart();
  const [bgFav, setBgFav] = useState(false);
  const [hover, setHover] = useState(false);
  const handleBgFav = () => {
    setBgFav((prev) => !prev);
  };
  const handleMouseEnterLeaveEvent = () => {
    setHover((prev) => !prev);
  };
  return (
    <div
      className="flex flex-col gap-y-7 w-[17rem] shrink-0"
      onMouseEnter={handleMouseEnterLeaveEvent}
      onMouseLeave={handleMouseEnterLeaveEvent}
    >
      <div className="rounded-[0.9375rem] h-[20rem] bg-slate-200 relative">
        <img
          src={product.img}
          className="rounded-[0.9375rem] object-cover hover:scale-[1.02] transition-all duration-300"
        />
        {product.tag && (
          <div className="absolute top-5 left-3 bg-[#FFCB5A] font-Inter rounded-xl px-3 py-[0.2rem] text-[0.6rem] text-center font-medium">
            {product.tag}
          </div>
        )}

        <div
          onClick={() => handleAddToCart(product.id)}
          className={`transition-opacity ${
            hover ? "xl:opacity-100" : "xl:opacity-0"
          } duration-300  rounded-full bg-[#f5f5f5]/[0.8] hover:bg-[#f5f5f5] absolute top-5 right-4 size-10 flex justify-center items-center cursor-pointer`}
        >
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-8 justify-between  border-black">
          <h4 className="font-Inter text-lg">{product.title}</h4>
          <div className="cursor-pointer mr-2" onClick={handleBgFav}>
            <Favorite fill={bgFav ? "red" : ""} />
          </div>
        </div>
        <div className="flex items-center gap-x-8 justify-between  border-black">
          <h5 className="font-Inter">
            Starts from{" "}
            <span className="text-[#445839] text-xl font-normal">
              ${product.price}
            </span>
          </h5>
          <div className="bg-[#7AA262] rounded-lg py-2 px-3 text-white font-Inter cursor-pointer">
            Shop now
          </div>
        </div>
      </div>
    </div>
  );
}
