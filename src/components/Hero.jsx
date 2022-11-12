import heroImg1 from "../assets/hero-img1.svg";
import heroImg2 from "../assets/hero-img2.svg";
import heroImg3 from "../assets/hero-img3.svg";
import heroImg4 from "../assets/hero-img4.svg";

import mbtoken from "../assets/mbtoken.svg";
import metamask from "../assets/metamask.svg";
import opensea from "../assets/opensea.svg";
const Hero = () => {
  return (
    <section className="">
      <div className="mx-[2rem]">
        <p className="mb-[3.8rem] text-[4.6rem] font-bold leading-[6.84rem] text-[#434343]">
          Rent a{" "}
          <span
            className="text-[#A02279]
            "
          >
            Place
          </span>{" "}
          away from <span className="text-[#A02279]">Home</span> in the{" "}
          <span className="text-[#A02279]">Metaverse</span>
        </p>
        <p className="mb-[2.8rem] text-[2rem] font-normal leading-[3rem] text-[#434343]">
          we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination
          to reality at your comfort zone
        </p>
        <div className="">
          <input
            type="text"
            className="mb-[1rem] block h-[4.90rem] w-[100%] rounded-[0.80rem] border-[1px]  border-solid border-[#A3A3A3] px-[1.5rem] text-[1.4rem] font-normal leading-[1.82rem] outline-none placeholder:text-[#B8B8B8]"
            placeholder="Search for location"
          />
          <button className="h-[4.90rem] rounded-[0.8rem] bg-[#A02279] px-[6.97rem] text-[1.6rem] font-normal leading-[1.93rem] text-[#fff] ">
            Search
          </button>
        </div>
      </div>
      <div className="mx-[2rem] mt-[2rem] flex gap-[2rem]">
        <div className="mt-[4rem] flex flex-col gap-[2rem]">
          <div>
            <img src={heroImg1} alt="nft" />
          </div>
          <div>
            <img src={heroImg2} alt="nft" />
          </div>
        </div>
        <div className="flex flex-col gap-[2rem]">
          <div>
            <img src={heroImg3} alt="nft" />
          </div>
          <div>
            <img src={heroImg4} alt="nft" />
          </div>
        </div>
      </div>
      <div className="mt-[8rem] flex flex-col items-center gap-[2rem] bg-[#A02279] py-[4rem]">
        <img src={mbtoken} alt="mbtoken" className=" w-[15rem]" />
        <img src={metamask} alt="metamask" className=" w-[15rem]" />
        <img src={opensea} alt="opensea" className=" w-[15rem]" />
      </div>
    </section>
  );
};

export default Hero;
