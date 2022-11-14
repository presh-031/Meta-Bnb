import heroImg1 from "../assets/hero-img1.svg";
import heroImg2 from "../assets/hero-img2.svg";
import heroImg3 from "../assets/hero-img3.svg";
import heroImg4 from "../assets/hero-img4.svg";

import mbtoken from "../assets/mbtoken.svg";
import metamask from "../assets/metamask.svg";
import opensea from "../assets/opensea.svg";
const Hero = () => {
  return (
    <>
      <section className="outline  xl:mx-[6.94%]  xl:mt-[8.2rem] xl:flex xl:justify-between">
        <div className="mx-[2rem] outline  xl:mx-0 xl:w-[64.6rem]">
          <p className="mb-[3.8rem] text-[4.6rem] font-normal leading-[6.84rem] text-[#434343]  xl:mb-[4.8rem] xl:text-[5.6rem] xl:leading-[7.84rem]">
            Rent a{" "}
            <span
              className="font-bold text-[#A02279]
            "
            >
              Place
            </span>{" "}
            away from <span className="font-bold text-[#A02279]">Home</span> in the{" "}
            <span className="font-bold text-[#A02279]">Metaverse</span>
          </p>
          <p className="mb-[2.8rem] text-[2rem] font-normal leading-[3rem] text-[#434343]  xl:mb-[4.8rem] xl:w-[98.5%] xl:text-[2.4rem] xl:leading-[3.5rem]">
            we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your
            imagination to reality at your comfort zone
          </p>
          <div className="xl:flex xl:h-[5.4rem] xl:overflow-hidden xl:rounded-[.8rem]">
            <input
              type="text"
              className="-none  mb-[1rem] block h-[4.90rem] w-[100%] rounded-[0.80rem] border-[1px] border-solid border-[#A3A3A3]  px-[1.5rem] text-[1.4rem] font-normal leading-[1.82rem] placeholder:text-[#B8B8B8] xl:mb-0 xl:h-[100%] xl:rounded-none xl:border-r-0"
              placeholder="Search for location"
            />
            <button className="h-[4.90rem] rounded-[0.8rem] bg-[#A02279] px-[6.97rem] text-[1.6rem] font-normal leading-[1.93rem] text-[#fff] xl:h-[100%] xl:rounded-none xl:px-[8.5rem] xl:text-[1.6rem] xl:leading-[1.92rem] ">
              Search
            </button>
          </div>
        </div>
        {/* xl:mt-0, then adjust header and header's mb */}
        <div className="mx-[2rem] mt-[2rem] flex gap-[2rem] border-[5px] border-red-800 xl:mx-0 xl:gap-[.8rem]">
          <div className="mt-[4rem] flex flex-col gap-[2rem] xl:mt-[9.9rem] xl:gap-[.8rem] ">
            <div>
              <img src={heroImg1} alt="nft" className="h-[17.6rem] w-[23.4rem]" />
            </div>
            <div>
              <img src={heroImg2} alt="nft" className="h-[17.6rem] w-[23.4rem]" />
            </div>
          </div>
          <div className="flex flex-col gap-[2rem]  xl:gap-[.8rem]">
            <div>
              <img src={heroImg3} alt="nft" className="h-[17.6rem] w-[23.4rem]" />
            </div>
            <div>
              <img src={heroImg4} alt="nft" className="h-[17.6rem] w-[23.4rem]" />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[8rem] flex flex-col items-center gap-[2rem] bg-[#A02279] py-[4rem] xl:mt-[6.7rem] xl:flex-row xl:justify-between xl:py-[1.5rem] xl:px-[13.88rem]">
        <img src={mbtoken} alt="mbtoken" className=" w-[15rem] xl:w-[20rem]" />
        <img src={metamask} alt="metamask" className=" w-[15rem] xl:w-[20rem]" />
        <img src={opensea} alt="opensea" className=" w-[15rem] xl:w-[20rem]" />
      </div>
    </>
  );
};

export default Hero;
