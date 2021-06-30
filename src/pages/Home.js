// import { Row, Col, Container, Image } from "react-bootstrap";
import "../App.css";
import ResponsiveEmbed from "react-responsive-embed";
// import { useSpring } from "react-spring";

import Gallery from "react-photo-gallery";
import { PhotosConklin } from "../components/PhotosConklin";
// import { PhotosFood } from "./components/PhotosFood";
import CharterModule from "../components/CharterModule";
import Magazine from "../components/Magazine";
import GsbYourDay from "../components/gsbYourDay";
import HellmansSalad from "../components/HellmanSalad";
import BurgerRoute from "../components/BurgerRoute";
import RangersAdventure from "../components/RangersAdventure";
import BurningMiles from "../components/BurningMiles";
import SLTheatre from "../components/SLTheatre";

const Home = () => {
    return(
        <>


<ResponsiveEmbed
        id="GrandmaCall"
        src="https://www.youtube.com/embed/_DEaSL8w6-A"
        allowFullScreen
      />

<RangersAdventure />
      <HellmansSalad />
      <CharterModule />



      <ResponsiveEmbed
        id="TacoTuesday"
        src="https://www.youtube.com/embed/NeOi3lTZauc"
        allowFullScreen
      />



<BurgerRoute />
      <ResponsiveEmbed
        id="gsbWereFansToo"
        src="https://www.youtube.com/embed/Bm-U6Q6oob0"
        allowFullScreen
      />
      <ResponsiveEmbed
        id="MSUsportsFan"
        src="https://www.youtube.com/embed/gtaFPmNaS4w"
        allowFullScreen
      />

      <Gallery photos={PhotosConklin} />


      <ResponsiveEmbed
        id="gsbAtTheMovies"
        src="https://www.youtube.com/embed/yh76dOxA2AY"
        allowFullScreen
      />

      <Magazine />

      <ResponsiveEmbed
        id="DebitOnOff"
        src="https://www.youtube.com/embed/gPQVVZWCJOQ"
        allowFullScreen
      />

      <GsbYourDay />

      <ResponsiveEmbed
        id="gsbGOAT"
        src="https://www.youtube.com/embed/tzwzX2O8L5U"
        allowFullScreen
      />

<SLTheatre />

      <ResponsiveEmbed
        id="MothersBot"
        src="https://www.youtube.com/embed/PyM-2WfmZo4"
        allowFullScreen
      />
    <BurningMiles />
        </>
    )
  }
  
  export default Home;