import AdCard from "./AdCard";
import ad1 from "../../../assets/banner/ad1.png";
import ad2 from "../../../assets/banner/ad2.png";
export default function AdBanner() {
  return (
    <div className="pt-4 pb-9 px-8 flex gap-x-8 overflow-x-scroll no-scrollbar w-full">
      <AdCard img={ad1} />
      <AdCard img={ad2} />
      <AdCard img={ad1} />
      <AdCard img={ad2} />
      <AdCard img={ad1} />
      <AdCard img={ad2} />
    </div>
  );
}
