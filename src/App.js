// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import "./App.css";

// import { useLocation } from "react-router-dom";

import MenuBar from "./components/MenuBar";

import Home from "./pages/Home";
import SonnyBIO from "./pages/sonnyBIO";
import PageNotFound from "./pages/PageNotFound";
import James from "./pages/JamesBIO";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Work from "./pages/Work";
import About from "./pages/About";
import Compact from "./pages/caseStudies/compact/Compact";
import Csusa from "./pages/caseStudies/Csusa";
import Conklin from "./pages/caseStudies/Conklin";
import DancePortraits from "./pages/caseStudies/DancePortraits";
import SportsFanGsb from "./pages/caseStudies/SportsFanGsb";
import WereFansTooGsb from "./pages/caseStudies/WereFansTooGsb";
import BeverageProf from "./pages/caseStudies/BeverageProf";
import SLTheatre from "./pages/caseStudies/SLTheatre";
import BurningMiles from "./pages/caseStudies/BurningMiles";
import RangersAdventure from "./pages/caseStudies/RangersAdventure";
import CFTB from "./pages/caseStudies/CFTB";
import FoodPhoto from "./pages/caseStudies/FoodPhoto";
import HellmannsSalad from "./pages/caseStudies/HellmannsSalad"

import ReactGA from "react-ga4";
// import {createBrowserHistory} from 'history'
import Tools from "./pages/Tools";
import ScreenTracker from "./pages/tools/ScreenTracker";
import Login from "./users/Login";
import Hotrodshow from "./pages/caseStudies/hotrodshow";
import McmahonPlane from "./pages/caseStudies/McmahonPlane";

function App() {

  // const location = useLocation();

  ReactGA.initialize("328049146");
  ReactGA.send({ hittype:"pageview", page: window.location.pathname });



  return (
    <>

    {/* {location.pathname !=="/screen-tracker" &&  <MenuBar />} */}
      <div style={{ minHeight: "80vh" }}>

<BrowserRouter>
    <MenuBar />
            <Routes>
           
          <Route path="/login" element={<Login />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/tools" element={<Tools />} />
           <Route path="/screen-tracker" element={<ScreenTracker />} />
           <Route path="/sonny" element={<SonnyBIO />} />
           <Route path="/james" element={<James />} />
           <Route path="/gallery" element={<Gallery />} />
           <Route path="/about" element={<About />} />
           <Route path="/work" element={<Work />} />
           <Route path="/" element={<Home />} />
           <Route path="/csusa" element={<Csusa />} />
           <Route path="/compact" element={<Compact />} />
           <Route path="*" element={<PageNotFound />} />
           <Route path="/conklin" element={<Conklin />} />
           <Route path="/dance-portraits" element={<DancePortraits />} />
           <Route path="/sports-fan" element={<SportsFanGsb/>} />
           <Route path="/were-fans-too" element={<WereFansTooGsb />} />
           <Route path="/beverage-professor" element={<BeverageProf />} />
           <Route path="/springfield-little-theatre" element={<SLTheatre />} />
           <Route path="/burning-miles" element={<BurningMiles />} />
           <Route path="/rangers-adventure" element={<RangersAdventure />} />
           <Route path="/center-for-the-blind" element={<CFTB />} />
           <Route path="/food-photography" element={<FoodPhoto />} />
           <Route path="/hot-rod-show" element={<Hotrodshow/>} />
           <Route path="/hellmanns-salad-recipes" element={<HellmannsSalad />} />
           <Route path="mcmahonsplane" element={<McmahonPlane />} />
        
            </Routes>
           </BrowserRouter>

      </div>

      <Footer />
    </>
  );
}

export default App;


