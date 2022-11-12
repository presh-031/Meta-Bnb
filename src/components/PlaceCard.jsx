import star from "../assets/star.svg";
import heart from "../assets/heart.svg";
const PlaceCard = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <img src={heart} alt="heart" />
        </div>
      </div>
      <p>
        <span>Desert king</span>
        <span>1MBT per night</span>
      </p>
      <p>
        <span>2345km away</span>
        <span>available for 2weeks stay</span>
      </p>
      <div>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
    </div>
  );
};

export default PlaceCard;
