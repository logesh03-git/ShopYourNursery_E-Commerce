type propType = {
  title: string;
  price: number;
  titleStyles?: string;
  priceStyles?: string;
};
export default function OrderRow({
  title,
  price,
  titleStyles,
  priceStyles,
}: propType) {
  return (
    <div className="flex justify-between">
      <div className={`text-[#515151] font-Poppins ${titleStyles}`}>
        {title}
      </div>
      <div className={`${priceStyles}`}>${price}</div>
    </div>
  );
}
