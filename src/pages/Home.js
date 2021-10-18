import {  Container } from "react-bootstrap";
import "../App.css";
// import ResponsiveEmbed from "react-responsive-embed";
// import { useSpring } from "react-spring";

// import Gallery from "react-photo-gallery";

import CharterModule from "../components/CharterModule";
import Magazine from "../components/Magazine";
import GsbYourDay from "../components/gsbYourDay";
import HellmansSalad from "../components/HellmanSalad";
import RangersAdventure from "../components/RangersAdventure";
import BurningMiles from "../components/BurningMiles";
import SLTheatre from "../components/SLTheatre";
import Compact from "../components/Compact";
import GrandmaCall from "../components/GrandmaCall";
import HomeSplash from "../components/HomeSplash";
import BeverageProf from "../components/BeverageProf";
import TacoTuesGsb from "../components/TacoTuesGsb";
import SportsFanGsb from "../components/SportsFanGsb";
import WereFansTooGsb from "../components/WereFansTooGsb";
import Conklin from "../components/Conklin";
import AtTheMoviesGsb from "../components/AtTheMoviesGsb";
import DebitOnOffGsb from "../components/DebitOnOffGsb";
import GoatGsb from "../components/GoatGsb";
import MothersDrone from "../components/MothersDrone";

const Home = () => {
  return (
    <Container fluid className="bg-dark p-0">


<HomeSplash />
<Container className="bg-white p-0">


      <Compact />
      <GrandmaCall />
      <BeverageProf />
      <HellmansSalad />
      <RangersAdventure />
      <CharterModule />
      <TacoTuesGsb />
      <SportsFanGsb />
      <GsbYourDay />
      <Conklin />
      <WereFansTooGsb />
      <Magazine />
      <AtTheMoviesGsb />
      <DebitOnOffGsb />
      <GoatGsb />
      <SLTheatre />
      <MothersDrone />
      <BurningMiles />
        </Container>
    </Container>
  );
};

export default Home;
