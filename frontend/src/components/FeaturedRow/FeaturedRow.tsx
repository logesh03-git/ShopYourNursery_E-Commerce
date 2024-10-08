import FeaturedCard from "./FeaturedCard";
import { productProps } from "../../constants/products";
import { useState, useEffect, useRef } from "react";
import { mobileStyles, intialStyles, viewAllStyles } from "./FeaturedStyles";
type propsType = {
  title: string;
  products: productProps[];
};
export default function FeaturedRow({ title, products }: propsType) {
  const [viewAll, setViewAll] = useState<boolean>(false);
  const [activeDot, setActiveDot] = useState<number>(0);
  const dotsCount: number = 8;
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleViewAll = () => {
    setViewAll((prev) => !prev);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth - container.clientWidth; // Total scrollable width
      const scrollLeft = container.scrollLeft; // Current scroll position
      const scrollPercentage = (scrollLeft / scrollWidth) * 100; // Calculate scroll percentage
      // Calculate active dot index (assuming 6 sections)
      const active = Math.round((scrollPercentage / 100) * (dotsCount - 1));
      setActiveDot(active);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="bg-[#DDF2D0] px-[4vw] py-14 flex flex-col gap-y-14 rounded-sm max-w-[1600px] w-full">
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
          ref={scrollContainerRef}
        >
          {products.map((product) => (
            <FeaturedCard key={product.id} productDetails={product} />
          ))}
          {products.map((product) => (
            <FeaturedCard key={product.id} productDetails={product} />
          ))}
        </div>
        {!viewAll && (
          <div className="mt-5 hidden sm:flex justify-center gap-x-2">
            {[...Array(dotsCount)].map((_, index) => (
              <div
                key={index}
                className={` size-2 rounded-full ${
                  activeDot == index ? "bg-white" : "bg-slate-500"
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
