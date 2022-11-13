import place1 from "../assets/places/place1.svg";
import place2 from "../assets/places/place2.svg";
import place3 from "../assets/places/place3.svg";
import place4 from "../assets/places/place4.svg";
import place5 from "../assets/places/place5.svg";
import place6 from "../assets/places/place6.svg";
import place7 from "../assets/places/place7.svg";
import place8 from "../assets/places/place8.svg";
import place9 from "../assets/places/place9.svg";
import place10 from "../assets/places/place10.svg";
import place11 from "../assets/places/place11.svg";
import place12 from "../assets/places/place12.svg";
import place13 from "../assets/places/place13.svg";
import place14 from "../assets/places/place14.svg";
import place15 from "../assets/places/place15.svg";
import place16 from "../assets/places/place16.svg";

import PlaceCard from "./PlaceCard";

import CardsContainer from "../UI/CardsContainer";

const AvailablePlaces = () => {
  return (
    <div className="mt-[6.4rem] mb-[9.2rem]">
      <CardsContainer>
        <PlaceCard product={place1} />
        <PlaceCard product={place2} />
        <PlaceCard product={place3} />
        <PlaceCard product={place4} />
        <PlaceCard product={place5} />
        <PlaceCard product={place6} />
        <PlaceCard product={place7} />
        <PlaceCard product={place8} />
        <PlaceCard product={place9} />
        <PlaceCard product={place10} />
        <PlaceCard product={place11} />
        <PlaceCard product={place12} />
        <PlaceCard product={place13} />
        <PlaceCard product={place14} />
        <PlaceCard product={place15} />
        <PlaceCard product={place16} />
      </CardsContainer>
    </div>
  );
};

export default AvailablePlaces;
