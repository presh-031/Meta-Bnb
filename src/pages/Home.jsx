import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="mx-auto max-w-[1440px] pt-[13.4rem]">
      <Hero />
      <Products />
      <Cta />
    </div>
  );
};

export default Home;
