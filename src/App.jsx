import Navbar from "./components/Navbar";
import AboutUs from "./components/1-AboutUs";
import Services from "./components/2-Services";
import ServiceDetail from "./components/3-ServiceDetail";
import Sectors from "./components/4-Sectors";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <div className="text-main relative">
      <ScrollTopButton />
      <Navbar />
      <AboutUs />
      <Services />
      <ServiceDetail />
      <Sectors />
      <Footer />
    </div>
  );
}

export default App;
