import { HiOutlineMenu } from "react-icons/hi";

import logo from "../assets/logo.svg";
import homeLogo from "../assets/home-logo.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prevIsOpen) => {
      return !prevIsOpen;
    });
  };
  return (
    <>
      <header className="mb-[2.5rem] flex w-[100%] items-center justify-between bg-white  px-[1rem] py-[2rem] shadow-md">
        <div className="flex items-end gap-[0.3rem]">
          <img src={homeLogo} alt="logo" className="h-[2.6rem] w-[3.199rem]" />
          <img src={logo} alt="logo" className="h-[2.2rem] w-[10.8rem]" />
        </div>
        <ul className="hidden">
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>

        <div className="flex items-center gap-[1rem]">
          <HiOutlineMenu size={24} color="#434343" onClick={handleMenuClick} />
          <button className="w-[8rem] rounded-[1rem] bg-[#A02279] py-2 text-[1.6rem] font-normal leading-[1.4rem] text-[#fff] outline">
            Connect wallet
          </button>
        </div>
      </header>
      <div className="outline">
        <p>Home</p>
        <p>Place to stay</p>
        <p>NFTs</p>
        <p>Community</p>
      </div>
    </>
  );
};

export default Header;
