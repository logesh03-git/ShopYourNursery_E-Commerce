type propsType = {
  card: {
    id: number;
    content: string;
    img: string;
  };
};

export default function VaseCard({ card }: propsType) {
  return (
    <div className="flex flex-col justify-start gap-y-5 min-w-[14rem] w-[14rem] h-[16rem]">
      <div className="flex justify-center item-center">
        <img src={card.img} className="w-[10rem]" />
      </div>
      <div className="text-center font-Inter text-sm ">{card.content}</div>
    </div>
  );
}
