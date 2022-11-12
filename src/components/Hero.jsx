import heroImg1 from "../assets/hero-img1.svg";
import heroImg2 from "../assets/hero-img2.svg";
import heroImg3 from "../assets/hero-img3.svg";
import heroImg4 from "../assets/hero-img4.svg";

const Hero = () => {
  return (
    <section className="outline px-[2rem]">
      <div>
        <p className="mb-[1.8rem] text-[#434343] font-bold text-[2rem] leading-[2rem]">
          Rent a{" "}
          <span
            //   className="
            // // text-transparent bg-clip-text bg-gradient-to-b to-[#FFC089] from-[#A02279]
            // "
            className="text-[#A02279]
            "
          >
            Place
          </span>{" "}
          away from <span className="text-[#A02279]">Home</span> in the{" "}
          <span className="text-[#A02279]">Metaverse</span>
        </p>
        <p className="text-[#434343] mb-[1.8rem]">
          we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination
          to reality at your comfort zone
        </p>
        <div className="flex">
          <input
            type="text"
            className="border-[#A3A3A3] px-[1.5rem] border-r-0 py-[0.7rem] border-[1px] border-solid"
            placeholder="Search for location"
          />
          <button className="bg-[#A02279] text-[#fff] px-[2.7rem] py-[0.7rem]">Search</button>
        </div>
      </div>
      <div className="flex gap-[2rem] mt-[2rem]">
        <div className="flex flex-col gap-[2rem] mt-[4rem]">
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
    </section>
  );
};

export default Hero;
