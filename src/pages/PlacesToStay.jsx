import AvailablePlaces from "../components/AvailablePlaces";
import FilterArea from "../components/FilterArea";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PlacesToStay = () => {
  return (
    <div className="pt-[12rem]">
      <FilterArea />
      <AvailablePlaces />
    </div>
  );
};

export default PlacesToStay;
