import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="pt-[12rem]">
      <div className="fixed top-0 right-0 left-0 outline">
        <Header />
      </div>
      <Hero />
      <Products />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
