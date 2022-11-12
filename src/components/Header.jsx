import logo from "../assets/logo.svg";
import homeLogo from "../assets/home-logo.svg";

const Header = () => {
  return (
    <header className="border border-red-800 flex px-[2rem] py-[4rem] mb-[2.5rem]">
      <div className="flex gap-[0.3rem] items-end">
        <img src={homeLogo} alt="logo" className="outline w-[4.199rem] h-[3.6rem]" />
        <img src={logo} alt="logo" className="outline w-[18.8rem] h-[3.2rem]" />
      </div>
      <ul className="hidden">
        <li>Home</li>
        <li>Place to stay</li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>
      <div className="hidden">
        <button>Connect wallet</button>
      </div>
    </header>
  );
};

export default Header;
