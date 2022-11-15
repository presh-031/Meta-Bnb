import ctaImage from "../assets/cta/ctaImage.svg";

const Cta = () => {
  return (
    <section className="bg-[#A02279] px-[5.33%] py-[8rem] text-[#fff] xl:mt-[5.3rem] xl:flex xl:justify-between xl:px-[6.94%] xl:py-[10rem]">
      <div className=" xl:mt-[8.6rem] xl:w-[41.5rem]">
        <p className="mb-[3.5rem] text-[4.8rem] font-bold leading-[5.995rem]">Metabnb NFTs</p>
        <p className="mb-[2rem] text-[1.8rem] font-normal leading-[3.5rem] xl:mb-[5.75rem] ">
          Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs.
          These NFTs gives our cutomer access to loads of our exclusive services.
        </p>
        <button className="rounded-[0.8rem] bg-[#fff] px-[3.3rem] py-[1.4rem] text-[1.6rem] font-normal leading-[1.92rem] text-[#A02279] ">
          Learn more
        </button>
      </div>
      <div className="mt-[6rem]  xl:mt-0">
        <img src={ctaImage} alt="cta-img" className="mx-auto " />
      </div>
    </section>
  );
};

export default Cta;
