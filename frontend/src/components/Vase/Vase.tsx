import leaf from "../../assets/vase/leaf.png";
import eco from "../../assets/vase/eco.png";
import tree from "../../assets/vase/tree.png";
import lock from "../../assets/vase/lock.png";
import VaseCard from "./VaseCard";
function Vase() {
  const config = [
    {
      id: 1,
      content:
        "Handpicked plants nurtured by experts to ensure health and vitality.",
      img: leaf,
    },
    {
      id: 2,
      content: "Sustainable growing methods and eco-conscious packaging.",
      img: eco,
    },
    {
      id: 3,
      content:
        "A diverse range of unique and exotic plants to enhance any space.",
      img: tree,
    },
    {
      id: 4,
      content: "Easy returns and exchanges for your peace with every purchase.",
      img: lock,
    },
  ];
  return (
    <div className="px-[5vw] w-full">
      <div className="bg-[#F5F5F5] my-24 py-16 flex flex-col justify-center items-center sm:grid sm:grid-cols-[14rem_14rem] sm:gap-12 md:gap-20  sm:items-start sm:place-items-center gap-y-10 lg:h-[30rem] lg:flex lg:flex-row lg:gap-x-5 lg:items-center lg:justify-evenly min-[1450px]:gap-x-20 min-[1450px]:justify-center rounded-xl max-w-[1600px] w-full">
        {config.map((item) => (
          <VaseCard key={item.id} card={item} />
        ))}
      </div>
    </div>
  );
}

export default Vase;
