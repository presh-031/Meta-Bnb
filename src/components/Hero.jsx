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
      <section className="outline md:mx-[6.94%]  md:mt-[8.2rem] md:flex md:justify-between">
        <div className="mx-[5.33%] text-center   md:mx-0 md:w-[72%] md:text-left  lg:w-[52%]">
          <p className="mb-[3.8rem] break-words text-[4.6rem] font-normal leading-[6.84rem] text-[#434343]  xl:mb-[4.8rem] xl:text-[5.6rem] xl:leading-[7.84rem]">
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
              className=" mb-[1rem] block h-[4.90rem] w-[100%] rounded-[0.80rem] border-[1px] border-solid border-[#A3A3A3] px-[1.5rem] text-[1.4rem]  font-normal leading-[1.82rem] outline-none placeholder:text-[#B8B8B8] xl:mb-0 xl:h-[100%] xl:rounded-r-none  xl:border-r-0"
              placeholder="Search for location"
            />
            <button className="h-[4.90rem] rounded-[0.8rem] bg-[#A02279] px-[6.97rem] text-[1.6rem] font-normal leading-[1.93rem] text-[#fff] xl:h-[100%] xl:rounded-none xl:px-[8.5rem] xl:text-[1.6rem] xl:leading-[1.92rem] ">
              Search
            </button>
          </div>
        </div>
        <div className="mx-[5.33%] mt-[2rem] flex max-w-[48.4rem]  justify-between gap-x-[.80rem]  min-[540px]:mx-auto md:mt-0 xl:mx-0">
          <div className="mt-[4rem] flex flex-col gap-[.8rem]  xl:mt-[9.9rem] ">
            <div className="">
              <img src={heroImg1} alt="nft" className="" />
            </div>
            <div>
              <img src={heroImg2} alt="nft" className="" />
            </div>
          </div>
          <div className="flex flex-col gap-[.8rem]">
            <div>
              <img src={heroImg3} alt="nft" className="" />
            </div>
            <div>
              <img src={heroImg4} alt="nft" className="" />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[8rem] flex flex-col items-center gap-[2rem] bg-[#A02279] py-[4rem] md:mt-[6.7rem] md:flex-row md:justify-between md:py-[1.5rem] md:px-[9.6%]">
        <img src={mbtoken} alt="mbtoken" className=" w-[15rem] xl:w-[20rem]" />
        <img src={metamask} alt="metamask" className=" w-[15rem] xl:w-[20rem]" />
        <img src={opensea} alt="opensea" className=" w-[15rem] xl:w-[20rem]" />
      </div>
    </>
  );
};

export default Hero;
