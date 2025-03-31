// css
import "./App.css";
import { useTranslation } from "react-i18next";

// components
import Banner from "./components/Banner";
import Buy from "./components/Buy";
import Devices from "./components/Devices";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Integration from "./components/Integration";
import Invest from "./components/Invest";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Promotion from "./components/Promotion";
import Trust from "./components/Trust";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Trust />
        <Integration />
        <Products />
        <Invest />
        <Promotion />
        <Devices />
        <Information />
        <Join />
        <Buy />
      </main>
      <Footer />
    </>
  );
}

export default App;
