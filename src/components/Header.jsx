import logo from "../assets/logo.svg";
import homeLogo from "../assets/home-logo.svg";

const Header = () => {
  return (
    <header className="mb-[2.5rem] flex w-[100%] items-center justify-between border border-red-800 bg-white px-[2rem] py-[2rem]">
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

      <div>
        <img src="" alt="" />

        <button className="w-[8rem] bg-[#A02279] py-2 text-[1.6rem] font-normal leading-[1.4rem] text-[#fff] outline">
          Connect wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
