import { footerDetailsProps } from "../../constants/footerDetails";

type propsType = {
  data: footerDetailsProps;
};

export default function FooterLinks({ data }: propsType) {
  return (
    <div className="flex flex-col gap-y-4 max-[550px]:text-center min-[550px]:w-fit text-nowrap ">
      <h2 className="font-Poppins font-bold text-[#2C2C2C] text-xl">
        {data.title}
      </h2>
      {data.items.map((item) => (
        <a
          href={item.link}
          key={item.id}
          className="text-[#5E5E5E] font-medium font-Poppins text-base cursor-pointer no-underline"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}
