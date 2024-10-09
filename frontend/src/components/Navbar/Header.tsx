import { RiSearch2Line } from "react-icons/ri";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="min-h-[6rem] border-b border-b-[#BDE3A6] px-8 flex items-center flex-wrap gap-x-8 flex-col gap-y-4 md:flex-row  xl:justify-between font-Poppins py-4 xl:py-0 justify-center w-full max-w-[1600px]">
      <div className="text-xl font-bold  xl:hidden">ShopYourNursery</div>
      <ul className="flex list-none  gap-x-8 flex-wrap justify-center items-center gap-y-2 font-medium border-none border-black">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#ShopPlants">Shop Plants</a>
        </li>
        <li>
          <a href="#PlantCare">Plant Care</a>
        </li>
        <li>
          <a href="#Blog">Blog</a>
        </li>
        <li>
          <a href="#ContactUs">Contact Us</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
      </ul>
      <NavLink
        to="/"
        className="text-xl font-bold hidden xl:block border-none border-black"
      >
        ShopYourNursery
      </NavLink>
      <div className="border-none border-black flex justify-center items-center gap-x-10 flex-wrap gap-y-2">
        <div className="flex items-center justify-center bg-[#E8E8E8] px-5 py-2 rounded-3xl gap-x-2">
          <input
            className="placeholder:text-[#A6A6A6] bg-transparent focus:outline-none w-full"
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
            <NavLink to="/cart" className={``}>
              {({ isActive }) =>
                isActive ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />
              }
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
