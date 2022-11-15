import PlaceCard from "./PlaceCard";

import product1 from "../assets/products/product1.svg";
import product2 from "../assets/products/product2.svg";
import product3 from "../assets/products/product3.svg";
import product4 from "../assets/products/product4.svg";
import product5 from "../assets/products/product5.svg";
import product6 from "../assets/products/product6.svg";
import product7 from "../assets/products/product7.svg";
import product8 from "../assets/products/product8.svg";
import CardsContainer from "../UI/CardsContainer";

const Products = () => {
  return (
    <div className=" py-[2rem] px-[5.33%] text-center xl:p-0">
      <p className="my-[2rem] break-words  text-[4.8rem]  font-bold leading-[5.995rem] text-[#000] xl:my-[5.8rem]">
        Inspiration for your next adventure
      </p>
      <CardsContainer>
        <PlaceCard product={product1} />
        <PlaceCard product={product2} />
        <PlaceCard product={product3} />
        <PlaceCard product={product4} />
        <PlaceCard product={product5} />
        <PlaceCard product={product6} />
        <PlaceCard product={product7} />
        <PlaceCard product={product8} />
      </CardsContainer>
    </div>
  );
};

export default Products;
