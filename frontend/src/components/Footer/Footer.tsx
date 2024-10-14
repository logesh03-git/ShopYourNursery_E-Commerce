import footerlogo from "../../assets/footer/footerlogo.png";
import { FaFacebook, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { footerDetails } from "../../constants/footerDetails";
import FooterLinks from "./FooterLinks";
type footerPropsType = {
  className?: string;
};
function Footer({ className }: footerPropsType) {
  return (
    <div
      className={`bg-[#F5F5DC] rounded flex flex-col gap-y-10 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-10 p-10 py-14 max-w-[1600px] w-full mt-10 ${className}`}
    >
      <div className="flex flex-col gap-y-8 items-center justify-center">
        <h2 className="font-bold font-Poppins text-3xl text-center">
          Shop Your Nursery
        </h2>
        <div className="max-w-[25rem] w-full rounded-xl">
          <img src={footerlogo} className="rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-8 sm:gap-y-14 justify-center lg:justify-start">
        <div className="relative flex flex-col items-center lg:items-start gap-y-6 min-[550px]:mb-5">
          <input
            type="email"
            className="border-[#E8E8E8] border rounded-[2.40125rem] h-[4rem] w-full max-w-[30rem] lg:max-w-full text-[#4A4A4A] placeholder:text-[#A9A9A9] focus:outline-none px-6 py-4 text-xl font-Poppins"
            placeholder="your e-mail"
          />
          <button className="bg-[#7AA262] rounded-[2.40125rem] h-[4rem] px-6 py-4 w-full max-w-[15rem] text-xl font-Poppins font-bold text-white lg:absolute lg:top-0 lg:right-0">
            subcribe now!
          </button>
        </div>
        <div className="grid min-[550px]:grid-cols-[min-content_min-content] lg:grid-cols-[min-content_min-content_min-content] xl:grid-cols-[min-content_min-content_min-content_min-content] gap-y-10 min-[550px]:gap-y-8  gap-x-28 place-content-center">
          {footerDetails.map((item) => (
            <FooterLinks key={item.id} data={item} />
          ))}
        </div>
        <hr className="w-full bg-[#5F5F5F] h-[2px]" />
        <div className="flex justify-between flex-col items-center gap-y-5 sm:flex-row sm:items-start">
          <div className="font-medium text-[#616161] font-Poppins text-xl">
            All rights reserved 2024
          </div>
          <div className="text-[#616161] flex gap-x-4 text-2xl items-center">
            <a
              href="https://www.facebook.com/"
              className="cursor-pointer no-underline"
            >
              <FaFacebook />
            </a>
            <a href="https://x.com/" className="cursor-pointer no-underline">
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.youtube.com/"
              className="cursor-pointer no-underline text-[1.8rem]"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
