import CarouselMain from "./CarouselMain";
import img1 from "../../assets/carousel/1.png";
import img2 from "../../assets/carousel/2.png";
import img3 from "../../assets/carousel/3.png";
import img4 from "../../assets/carousel/4.png";
export default function Carousel() {
  const config = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ];
  const usableConfig = [config[config.length - 1], ...config, config[0]];
  return (
    <div className="my-5 sm:mt-10 sm:mb-28 mx-[2vw] sm:mx-[6vw]">
      <CarouselMain autoSlide={true} autoSlideInterval={2000}>
        {usableConfig.map((item, index) => (
          <img key={index} src={item.img} className="rounded-xl" />
        ))}
      </CarouselMain>
    </div>
  );
}
