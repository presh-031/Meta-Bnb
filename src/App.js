import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PlacesToStay from "./pages/PlacesToStay";

import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <div className="fixed top-0 right-0 left-0">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<PlacesToStay />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
