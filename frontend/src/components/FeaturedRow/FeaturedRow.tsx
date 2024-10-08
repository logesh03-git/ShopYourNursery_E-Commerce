import FeaturedCard from "./FeaturedCard";
import { productProps } from "../../constants/products";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useState } from "react";
type propsType = {
  title: string;
  products: productProps[];
};
export default function FeaturedRow({ title, products }: propsType) {
  const [viewAll, setViewAll] = useState(false);
  const handleViewAll = () => {
    setViewAll((prev) => !prev);
  };
  const mobileStyles: string = "flex flex-col items-center gap-y-20";
  const intialStyles: string =
    "sm:flex-row sm:gap-x-20 sm:overflow-scroll no-scrollbar";
  const viewAllStyles: string =
    "min-[650px]:grid min-[650px]:grid-cols-[17rem_17rem] lg:grid-cols-[17rem_17rem_17rem] min-[1420px]:grid-cols-[17rem_17rem_17rem_17rem] min-[1830px]:grid-cols-[17rem_17rem_17rem_17rem_17rem] gap-10 md:gap-20 lg:gap-14 xl:gap-20 min-[1420px]:gap-20  min-[1830px]:gap-20  min-[650px]:place-items-center  min-[650px]:place-content-center";
  return (
    <div className="bg-[#DDF2D0] px-[4vw] py-14 flex flex-col gap-y-14 rounded-sm">
      <div className="flex justify-center sm:justify-between">
        <h1 className="font-Philosopher text-3xl text-center sm:text-left sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div
          onClick={handleViewAll}
          className="cursor-pointer border-b border-b-black h-fit hidden min-[650px]:block"
        >
          View All
        </div>
      </div>
      <div className="relative border-none border-black">
        <div
          className={`${mobileStyles} ${
            viewAll ? viewAllStyles : intialStyles
          } transition-all `}
        >
          {products.map((product) => (
            <FeaturedCard key={product.id} productDetails={product} />
          ))}
          {products.map((product) => (
            <FeaturedCard key={product.id} productDetails={product} />
          ))}
        </div>
        {!viewAll && (
          <>
            <span className="absolute top-[45%] -left-5 text-xl hidden sm:block ">
              <MdOutlineKeyboardDoubleArrowLeft />
            </span>
            <span className="absolute top-[45%] -right-5 text-xl hidden sm:block">
              <MdOutlineKeyboardDoubleArrowRight />
            </span>
          </>
        )}
      </div>
    </div>
  );
}
