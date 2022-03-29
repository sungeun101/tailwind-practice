import Navbar from "./components/Navbar";
import AboutUs from "./components/1-AboutUs";
import Services from "./components/2-Services";
import ServiceDetail from "./components/3-ServiceDetail";
import Sectors from "./components/4-Sectors";

function App() {
  return (
    <div className="text-main">
      <Navbar />
      <AboutUs />
      <Services />
      <ServiceDetail />
      <Sectors />
    </div>
  );
}

export default App;
