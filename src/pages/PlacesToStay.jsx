import AvailablePlaces from "../components/AvailablePlaces";
import FilterArea from "../components/FilterArea";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PlacesToStay = () => {
  return (
    <div className="mx-auto max-w-[1440px] pt-[13.4rem] ">
      <FilterArea />
      <AvailablePlaces />
    </div>
  );
};

export default PlacesToStay;
