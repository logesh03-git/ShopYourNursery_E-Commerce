import { RiSearch2Line } from "react-icons/ri";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
function Navbar() {
  return (
    <div className="min-h-[6.5rem] border-b border-b-[#BDE3A6] px-8 flex items-center flex-wrap gap-x-8 flex-col gap-y-4 md:flex-row  xl:justify-between font-Poppins mb-4 py-4 xl:py-0 justify-center">
      <div className="text-xl font-bold  xl:hidden">ShopYourNursery</div>
      <ul className="flex list-none  gap-x-8 flex-wrap justify-center items-center gap-y-2 font-medium">
        <li>Home</li>
        <li>Shop Plants</li>
        <li>Plant Care</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>FAQ</li>
      </ul>
      <div className="text-xl font-bold hidden xl:block">ShopYourNursery</div>
      <div className="flex justify-center items-center gap-x-10 flex-wrap gap-y-2">
        <div className="flex items-center justify-center bg-[#E8E8E8] px-5 py-2 rounded-3xl gap-x-2">
          <input
            className="placeholder:text-[#A6A6A6] bg-transparent focus:outline-none "
            placeholder="Quick Search"
          />
          <div className="flex items-center justify-center text-xl">
            <RiSearch2Line />
          </div>
        </div>
        <div className="items-center justify-between gap-x-3 hidden sm:flex">
          <div>
            <AccountCircleOutlinedIcon />
          </div>
          <div>
            <FavoriteBorderOutlinedIcon />
          </div>
          <div>
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
