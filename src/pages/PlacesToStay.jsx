import AvailablePlaces from "../components/AvailablePlaces";
import FilterArea from "../components/FilterArea";

const PlacesToStay = () => {
  return (
    <div className="mx-auto max-w-[1440px] bg-[#f5f5f5] pt-[13.4rem] ">
      <FilterArea />
      <AvailablePlaces />
    </div>
  );
};

export default PlacesToStay;
