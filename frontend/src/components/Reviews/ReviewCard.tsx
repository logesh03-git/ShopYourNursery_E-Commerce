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
              "https://s3-alpha-sig.figma.com/img/8adf/8bc4/ae9ec24ebb8e04daeece801ba0614e96?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXD8YQYjZy~taAQU6TkEWWXuZrvXbr6cKxz7OVhWmeDmcuM7lI9xBmTi-Sx7ZuUYAk5-CqxCVjzl3s~JM5ntVVGEYDo3Rr0Zz3kkQN7~~3DmtvajQNOydHMVX0k43mxiQh6m-l3sqRJtnwdVyMKbADOVE6H8qXWCj3vVuND5mrudzOB5fmhApPQs-LQ1FFtCKZBHESONAlqpbTYtUoibubmBu8UA0zfH9iILYrwfHzZTn1EPE~K8utmYM-4RdilrY5vRUzlRWDeV9nMRfn-L4O4o3tzGewSRTnDdPJqDPN-ow9JSLttM1SW6IJKukFgzAPi8a~7nuBJcOd3~zWISOQ__"
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
