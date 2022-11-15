import location from "../assets/location.svg";

const FilterArea = () => {
  return (
    <div className="flex h-[3.8rem] items-center px-[2rem] outline xl:mt-[2.9rem] xl:h-[4.8rem] xl:pl-[10rem] xl:pr-[16.3rem] ">
      <ul className="flex flex-1 items-center  gap-[4.8rem] overflow-auto whitespace-nowrap text-[1.4rem] font-normal leading-[2.498rem] text-[#434343] scrollbar-hide xl:text-[2rem]">
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
      </ul>
      <div className="flex w-[10.1rem] items-center justify-around rounded-[.80rem] border-[1px] border-solid border-[#b4b4b4] xl:h-[100%] xl:w-[16.1rem]">
        <p className="text-[1rem] leading-[1.92rem] text-[#333333] xl:text-[1.6rem] ">Location</p>
        <img src={location} alt="select-location" className=" h-[2.4rem] w-[2.4rem]" />
      </div>
    </div>
  );
};

export default FilterArea;
