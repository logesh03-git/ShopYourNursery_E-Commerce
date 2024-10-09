import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

type propsType = {
  children: React.ReactNode[];
  autoSlide: boolean;
  autoSlideInterval: number;
};

function CarouselMain({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}: propsType) {
  const slides = [...children];
  const [currIndex, setCurrIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrIndex((curr) => (curr === 0 ? slides.length - 2 : curr - 1));
  };
  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrIndex((curr) => (curr === slides.length - 1 ? 1 : curr + 1));
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currIndex === slides.length - 1) {
      setCurrIndex(1);
    } else if (currIndex === 0) {
      setCurrIndex(slides.length - 2);
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      next();
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [next]);
  return (
    <div className="overflow-hidden  relative border-none border-black">
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex ${
          isTransitioning ? "transition-transform duration-1000 ease-out" : ""
        }`}
        style={{ transform: `translateX(-${currIndex * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-[0.10] sm:px-1">
        <button
          onClick={prev}
          className=" text-slate-500/[0.8] text-xs sm:text-xl"
        >
          <FaArrowCircleLeft />
        </button>
        <button
          onClick={next}
          className=" text-slate-500/[0.8] text-xs sm:text-xl"
        >
          <FaArrowCircleRight />
        </button>
      </div>
      <div className="flex justify-center  w-full mt-2">
        <div className="border-none border-black flex justify-start gap-x-1 sm:gap-x-2 w-fit">
          {Array.from({ length: slides.length }).map((_, index: number) => {
            if (index != 0 && index != slides.length - 1) {
              return (
                <div
                  key={index}
                  className={`bg-[#C5C5C5] rounded-full border-none border-black w-2 h-[3px] sm:w-4 sm:h-[6px] ${
                    currIndex == index &&
                    "w-4 h-[3px] sm:w-8 sm:h-[6px] transition-all duration-500"
                  }`}
                ></div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default CarouselMain;
