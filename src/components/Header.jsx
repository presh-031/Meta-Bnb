import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

import logo from "../assets/logo.svg";
import homeLogo from "../assets/home-logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import close from "../assets/close.svg";
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

  const handleModalBgClick = (e) => {
    if (e.target === e.currentTarget) {
      setConnectWalletIsOpen(false);
    }
  };

  const handleEscKeyPress = () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setConnectWalletIsOpen(false);
      }
    });
  };
  handleEscKeyPress();
  return (
    <>
      <header className="mx-auto mb-[2.5rem] flex w-[100%] max-w-[1440px]  items-center justify-between bg-white px-[1rem] py-[2rem] shadow-md max-[280px]:flex-col max-[280px]:gap-[1rem] sm:shadow-none xl:px-[6.94%] xl:py-[4.3rem]">
        <div className="flex items-end gap-[0.3rem] ">
          <img src={homeLogo} alt="logo" className="h-[2.6rem] w-[3.199rem]" />
          <img src={logo} alt="logo" className="h-[2.2rem] w-[10.8rem]" />
        </div>
        <ul className="hidden gap-[4.8rem]  text-[1.2rem]  sm:flex xl:text-[2rem]  xl:font-normal xl:leading-[2.498rem]">
          <li
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              navigate("/places");
            }}
          >
            Place to stay
          </li>
          <li className="cursor-pointer">NFTs</li>
          <li className="cursor-pointer">Community</li>
        </ul>

        <div className="flex items-center gap-[1rem] ">
          <HiOutlineMenu className="cursor-pointer  sm:hidden" size={24} color="#434343" onClick={handleMenuClick} />
          <button
            onClick={handleConnectWalletBtnClick}
            className="w-[8rem] rounded-[1rem] bg-[#A02279] py-2 text-[1.6rem] font-normal leading-[1.4rem] text-[#fff]  md:w-[17.7rem] md:py-[1.5rem] md:leading-[1.998rem]"
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
              className="border-b-solid font-400 cursor-pointer border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]"
            >
              Home
            </p>
            <p
              onClick={() => {
                navigate("/places");
                setIsOpen(false);
              }}
              className="border-b-solid font-400 cursor-pointer border-b-[1px] border-b-gray-300 p-[1.5rem]  text-[1.8rem]"
            >
              Place to stay
            </p>
            <p className="border-b-solid font-400 cursor-pointer border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">
              NFTs
            </p>
            <p className="border-b-solid font-400 cursor-pointer border-b-[1px] border-b-gray-300  p-[1.5rem] text-[1.8rem]">
              Community
            </p>
          </div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="modalBg absolute top-0 h-[100vh] w-[100%] bg-black bg-opacity-20 "
          ></div>
        </div>
      )}

      {connectWalletIsOpen && (
        <div
          onClick={handleModalBgClick}
          className="modalBg fixed top-0 flex h-[100vh] w-[100vw] items-center justify-center border border-black  bg-black bg-opacity-20"
        >
          <div className="modal z-10 w-[80%] overflow-hidden rounded-[1.4rem] bg-white   md:w-[41.67%]">
            <div className="flex items-center justify-between border-b-[1px] border-b-[#cfd8dc] px-[2rem] py-[1.8rem] xl:px-[3.2rem] xl:py-[2.4rem] ">
              <p className="text-[2rem] font-bold leading-[2.998rem] text-[#333333] xl:text-[2.4rem]">Connect Wallet</p>
              <CgClose
                onClick={() => {
                  setConnectWalletIsOpen(false);
                }}
                className="h-[3.2rem] w-[3.2rem] cursor-pointer xl:w-[6]"
              />
            </div>
            <div>
              <p className="mx-[2rem] mt-[2rem] mb-[1.8rem] text-[1.6rem] leading-[1.998rem] text-[#333333] xl:mx-[3.2rem] xl:mt-[3.2rem] xl:mb-[1.6rem]">
                Choose your preferred wallet
              </p>
              <div className="mx-[2rem] my-[1.6rem] flex cursor-pointer items-center justify-between rounded-[1.2rem] border-[1px] border-[#cfd8dc] bg-[#F8F9FA] p-[1.2rem] xl:mx-[3.2rem] xl:py-[1.2rem] xl:px-[2rem]">
                <div className="flex items-center gap-[1.6rem]">
                  <img src={metamask} alt="metamask" className="w-[1.8rem] xl:h-[4.4rem] xl:w-[4.4rem]" />
                  <p className="font-sora text-[1.80rem] font-semibold  leading-[2.268rem]">Metamask</p>
                </div>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="mx-[2rem] mt-[1.6rem] mb-[2rem] flex cursor-pointer items-center justify-between rounded-[1.2rem] border-[1px] border-[#cfd8dc] bg-[#F8F9FA] p-[1.2rem] xl:mx-[3.2rem] xl:py-[1.2rem] xl:px-[2rem]">
                <div className="flex items-center gap-[1.6rem]">
                  <img src={walletconnect} alt="walletconnect" className="w-[1.8rem]" />
                  <p className="font-sora text-[1.80rem] font-semibold leading-[2.268rem] ">WalletConnect</p>
                </div>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
