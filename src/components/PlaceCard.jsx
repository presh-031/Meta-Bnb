import star from "../assets/star.svg";
// import heart from "../assets/heart.svg";

const PlaceCard = ({ product }) => {
  return (
    <div className="w-fit mx-auto border-[#D7D7D7] border-[1px] p-[1.6rem]">
      <div>
        <img src={product} alt="" />
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
