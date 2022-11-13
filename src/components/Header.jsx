import { HiOutlineMenu } from "react-icons/hi";

import logo from "../assets/logo.svg";
import homeLogo from "../assets/home-logo.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [connectWalletIsOpen, setConnectWalletIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prevIsOpen) => {
      return !prevIsOpen;
    });
  };

  const handleConnectWalletBtnClick = () => {
    setConnectWalletIsOpen((prevConnectWalletIsOpen) => {
      return !prevConnectWalletIsOpen;
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
          <HiOutlineMenu className="cursor-pointer" size={24} color="#434343" onClick={handleMenuClick} />
          <button
            onClick={handleConnectWalletBtnClick}
            className="w-[8rem] rounded-[1rem] bg-[#A02279] py-2 text-[1.6rem] font-normal leading-[1.4rem] text-[#fff] outline"
          >
            Connect wallet
          </button>
        </div>
      </header>
      {isOpen && (
        <div className="">
          <div className="absolute  right-[2rem] top-[8rem] z-10 w-[20rem] overflow-hidden  rounded-[1rem]  bg-white">
            <p className="border-b-solid font-400 border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">Home</p>
            <p className="border-b-solid font-400 border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">
              Place to stay
            </p>
            <p className="border-b-solid font-400 border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">NFTs</p>
            <p className="border-b-solid font-400 border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">
              Community
            </p>
          </div>
          <div
            onClick={handleMenuClick}
            className="modal absolute top-0 h-[100vh] w-[100%] bg-black bg-opacity-20 outline"
          ></div>
        </div>
      )}

      {connectWalletIsOpen && (
        <div className="">
          <div className="absolute top-[50%] left-[50%] z-10 w-[20rem]  translate-x-[-50%] translate-y-[-50%] overflow-hidden  rounded-[1rem]  bg-white">
            <p className="border-b-solid font-400 border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">Home</p>
            <p className="border-b-solid font-400 border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">
              Place to stay
            </p>
            <p className="border-b-solid font-400 border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">NFTs</p>
            <p className="border-b-solid font-400 border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">
              Community
            </p>
          </div>
          <div
            onClick={setConnectWalletIsOpen(false)}
            className="modal relative top-0 h-[100vh] w-[100%] border border-black  bg-black bg-opacity-20"
          ></div>
        </div>
      )}
    </>
  );
};

export default Header;
