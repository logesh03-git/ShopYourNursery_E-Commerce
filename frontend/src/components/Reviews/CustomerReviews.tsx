import InfiniteXScroll from "../InfiniteXScroll/InfiniteXScroll";
import ReviewCard from "./ReviewCard";

export default function CustomerReviews() {
  const config = [
    {
      id: 1,
      review:
        '“Great experience shopping at Shopyournursery! The website is user-friendly, and I found the perfect plant to gift my friend. The packaging and delivery were spot on, making it an effortless and enjoyable process."',
      reviewer: "Sarah W",
      avatar: "",
    },
    {
      id: 2,
      review:
        '"I\'ve purchased from many online nurseries, but none compare to Shopyournursery. Their unique plant selection and excellent customer service set them apart. My order arrived on time and in perfect shape!"',
      reviewer: "Emma L",
      avatar: "",
    },
    {
      id: 3,
      review:
        '"The quality of plants is top-notch, and I love that they use sustainable practices. It’s comforting to know I’m supporting a business that cares about the environment. Will definitely be buying more!"',
      reviewer: "Sasha B",
      avatar: "",
    },
  ];
  const firstConfig = [...config, ...config];
  return (
    <div className="flex flex-col gap-y-14  my-10 sm:my-10 sm:mb-20 max-w-[1600px] w-full">
      <h1 className="px-[4vw] font-Philosopher text-3xl text-center sm:text-left sm:text-4xl md:text-5xl ">
        Customer Reviews
      </h1>
      <div className="flex flex-col gap-y-20">
        <InfiniteXScroll>
          {firstConfig.map((reviewCard, index) => (
            <ReviewCard key={index} card={reviewCard} />
          ))}
        </InfiniteXScroll>
        <InfiniteXScroll right={true}>
          {firstConfig.map((reviewCard, index) => (
            <ReviewCard key={index} card={reviewCard} />
          ))}
        </InfiniteXScroll>
      </div>
    </div>
  );
}
