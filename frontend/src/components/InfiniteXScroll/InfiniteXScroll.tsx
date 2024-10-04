import React from "react";
type PropsType = {
  left?: boolean;
  right?: boolean;
  children: React.ReactNode;
};
export default function InfiniteXScroll({
  children,
  right = false,
}: PropsType) {
  return (
    <div
      className="py-4 overflow-hidden hover:overflow-x-auto no-scrollbar w-full relative  border-none"
      dir={`${right ? "rtl" : "ltr"}`}
    >
      <div
        className={`flex gap-x-16 ${
          right
            ? "animate-autoScrollInfiniteRight"
            : "animate-autoScrollInfinite"
        } hover:[animation-play-state:paused] w-max `}
        dir="ltr"
      >
        {children}
      </div>
    </div>
  );
}
