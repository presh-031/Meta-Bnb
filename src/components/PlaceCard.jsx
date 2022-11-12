import star from "../assets/star.svg";
// import heart from "../assets/heart.svg";

const PlaceCard = ({ product }) => {
  return (
    <div className="mx-auto w-fit rounded-[1.5rem] border-[1px] border-[#D7D7D7] p-[1.6rem]">
      <div>
        <img src={product} alt="nft" />
      </div>
      <p className="mt-[1.6rem] mb-[1rem] flex justify-between text-[1.2rem] font-normal leading-[1.32rem]">
        <span>Desert king</span>
        <span className="font-bold">1MBT per night</span>
      </p>
      <p className="mb-[0.9rem] flex justify-between text-[1.2rem] font-normal leading-[1.32rem]">
        <span>2345km away</span>
        <span>available for 2weeks stay</span>
      </p>
      <div className="flex gap-[0.8rem] ">
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
