import { HiOutlineMenu } from "react-icons/hi";

import logo from "../assets/logo.svg";
import homeLogo from "../assets/home-logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import close from "../assets/close.svg";
import arrow from "../assets/arrow.svg";
import metamask from "../assets/metamasklogo.svg";
import walletconnect from "../assets/walletconnect.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [connectWalletIsOpen, setConnectWalletIsOpen] = useState(false);

  const navigate = useNavigate();

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
            <p
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
              className="border-b-solid font-400 border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]"
            >
              Home
            </p>
            <p
              onClick={() => {
                navigate("/places");
                setIsOpen(false);
              }}
              className="border-b-solid font-400 border-b-[1px] border-b-gray-300 p-[1.5rem]  text-[1.8rem]"
            >
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
        <div className="absolute top-0 w-[100%]">
          <div className="absolute top-[50%] left-[50%] z-10 w-[80%] translate-x-[-50%] translate-y-[50%]  overflow-hidden rounded-[1rem] border  border-red-800  bg-white">
            <div className="flex items-center justify-between px-[2rem] py-[1.8rem] outline ">
              <p className="text-[2rem] font-bold leading-[2.998rem]">Connect Wallet</p>
              <img
                onClick={setConnectWalletIsOpen(false)}
                className="h-[3.2rem] w-[3.2rem] outline"
                src={close}
                alt="close"
              />
            </div>
            <div>
              <p className="mx-[2rem] mt-[2rem] mb-[1.8rem] text-[1.6rem] leading-[1.998rem] text-[#333333]">
                Choose your preferred wallet
              </p>
              <div className="mx-[2rem] flex items-center justify-between outline">
                <div className="flex items-center gap-[1.6rem]">
                  <img src={metamask} alt="metamask" />
                  <p>Metamask</p>
                </div>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="mx-[2rem] flex items-center justify-between outline">
                <div className="flex items-center gap-[1.6rem]">
                  <img src={walletconnect} alt="walletconnect" />
                  <p>WalletConnect</p>
                </div>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div
            onClick={handleConnectWalletBtnClick}
            className="modal absolute top-0 h-[100vh] w-[100%] border border-black  bg-black bg-opacity-20"
          ></div>
        </div>
      )}
    </>
  );
};

export default Header;
