import location from "../assets/location.svg";

const FilterArea = () => {
  return (
    <div className="flex h-[3.8rem] items-center border border-red-800 px-[2rem] xl:mt-[2rem] ">
      <ul className="flex flex-1 items-center  gap-[4.8rem] overflow-auto whitespace-nowrap text-[1.4rem] font-normal leading-[2.498rem] text-[#434343]">
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
      </ul>
      <div className="flex w-[10.1rem] items-center justify-around border-[1px] border-solid border-[#b4b4b4]">
        <p className="text-[1rem] leading-[1.92rem] text-[#333333] ">Location</p>
        <img src={location} alt="select-location" className="block" />
      </div>
    </div>
  );
};

export default FilterArea;
