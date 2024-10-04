type ReviewPropsType = {
  card: {
    id: number;
    review: string;
    reviewer: string;
    avatar: string;
  };
};
export default function ReviewCard({ card }: ReviewPropsType) {
  return (
    <div className="bg-[#DDF2D0] rounded-[0.9375rem] w-[29rem] h-[16.2rem] pt-7  pl-10 pr-8 pb-8 shrink-0">
      <div className="text-center font-Inter ml-5 mt-2 mr-2">{card.review}</div>
      <div className="flex gap-x-5 items-center mt-8">
        <div className="rounded-full shrink-0 size-10 bg-slate-400 overflow-hidden">
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/bbc8/7665/fc96fdb4ad5809238807b7e4bdb0657a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUri9S4Cym4ufQq2rzPY0O6LfyzXfh6TStGsUAPnJmrNkvJXdoUnzl1sBvkH1hjf20VefcpL6lM3JR6UuCgTc-qN21B7jIEmj47C8-LLIGCRQKzFSVUJlv5iA~IOQGdne9OVJzD2nLIT7nkCqWA2tY08cYuXvPqnfYV6Fx~NV455vjxtvhpQd4myjQsRb28YyvwtqMPH8WlpXXe83VW0c6T3hEbkMdwESxqukqQttgKwcPwpyh8LU1w94MUqJDcTOBiF6z7ufd5DBl34MOl1Hh93vPdjov4NVaFC6AH6-UHR2wxw3rV4biFTFzRkU9vhb25AdhGFjIg~FvNDKXYcVA__"
            }
          />
        </div>
        <h3 className="font-Philosopher text-[#445839] font-bold">
          {card.reviewer}
        </h3>
      </div>
    </div>
  );
}
