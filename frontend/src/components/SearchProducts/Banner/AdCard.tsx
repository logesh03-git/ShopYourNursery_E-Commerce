type propsType = {
  img: string;
};
export default function AdCard({ img }: propsType) {
  return (
    <div className="border border-[#B38FF9] rounded-[1.25rem] w-[25rem] shrink-0 max-w-[25rem]  h-[10rem] overflow-hidden">
      <img src={img} className="w-full h-full object-cover" />
    </div>
  );
}
