import logoWhite from "../assets/footer/logo-white.svg";
import fb from "../assets/footer/fb.svg";
import insta from "../assets/footer/insta.svg";
import twitter from "../assets/footer/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E] px-[2rem] pt-[6.3rem] pb-[3.7rem] text-[1.4rem] font-normal leading-[3.5rem] text-[#F1F3F9] xl:flex  xl:justify-between xl:px-[12rem] xl:pt-[6.3rem] xl:pb-[3.7rem]">
      <div className="outline">
        <div className="mb-[9.6rem] outline">
          <img className="h-[3rem] w-[15rem] xl:h-[4rem] xl:w-[23.3rem]" src={logoWhite} alt="logo" />
        </div>
        <div className="mt-[5.5rem] mb-[5.90rem] flex gap-[3rem] outline xl:mt-0 ">
          <img src={fb} alt="facebook" />
          <img src={insta} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
        <p className="text-[1.6rem] font-normal leading-[1.6rem] text-[#f7f7f7]">&#169; 2022 Metabnb</p>
      </div>
      <div className="my-[5rem] outline xl:my-0">
        <p className="mb-[1rem] text-[1.8rem] font-bold leading-[2.248rem] text-white xl:mb-[2.3rem]">Community</p>
        <p className="">NFT</p>
        <p className="">Tokens</p>
        <p className="">Landlords</p>
        <p className="">Discord</p>
      </div>
      <div className="mb-[5rem] outline xl:mb-0">
        <p className=" mb-[1rem] text-[1.8rem] font-bold leading-[2.248rem] text-white xl:mb-[2.3rem]">Places</p>
        <p className="">Castle</p>
        <p className="">Farms</p>
        <p className="">Beach</p>
        <p className="">Learn more</p>
      </div>
      <div className="outline">
        <p className="mb-[1rem] text-[1.8rem] font-bold leading-[2.248rem] text-white xl:mb-[2.3rem]">About us</p>
        <p className="">Road map</p>
        <p className="">Creators</p>
        <p className="">Career</p>
        <p className="">Contact us</p>
      </div>
    </footer>
  );
};

export default Footer;
