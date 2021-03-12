import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './App.css';
import ResponsiveEmbed from 'react-responsive-embed';
import {useSpring} from 'react-spring';

import {useState, useCallback} from 'react';
import Gallery from 'react-photo-gallery';
import {PhotosConklin} from './components/PhotosConklin';
import {PhotosFood} from './components/PhotosFood';
import CharterModule from './components/CharterModule';
import Magazine from './components/Magazine';
import MenuBar from './components/MenuBar';


function App() {

  return (
    <>

    <MenuBar />

<ResponsiveEmbed id="GrandmaCall" src='https://www.youtube.com/embed/_DEaSL8w6-A'allowfullscreen />

<CharterModule />

<ResponsiveEmbed id="CharterTV" src='https://www.youtube.com/embed/JONfva999bw'allowfullscreen />

<ResponsiveEmbed id="TacoTuesday" src='https://www.youtube.com/embed/NeOi3lTZauc'allowfullscreen />

<ResponsiveEmbed id="HellmansEloteSalad" src='https://www.youtube.com/embed/VqnIgLL8KiM'allowfullscreen />

<ResponsiveEmbed id="MSUsportsFan" src='https://www.youtube.com/embed/gtaFPmNaS4w'allowfullscreen />

<ResponsiveEmbed id="gsbWereFansToo" src='https://www.youtube.com/embed/Bm-U6Q6oob0'allowfullscreen />

<Gallery photos={PhotosConklin} />

<ResponsiveEmbed id="burgerRoute" src='https://www.youtube.com/embed/JG2F4hcc9H0'allowfullscreen />

<ResponsiveEmbed id="gsbAtTheMovies" src='https://www.youtube.com/embed/yh76dOxA2AY'allowfullscreen />

<Magazine />


<ResponsiveEmbed id="DebitOnOff" src='https://www.youtube.com/embed/gPQVVZWCJOQ'allowfullscreen />

<ResponsiveEmbed id="gsbYourDayBusiness" src='https://www.youtube.com/embed/qiSL8RtaIbQ'allowfullscreen />

<ResponsiveEmbed id="gsbGOAT" src='https://www.youtube.com/embed/tzwzX2O8L5U'allowfullscreen />

<ResponsiveEmbed id="MothersBot" src='https://www.youtube.com/embed/PyM-2WfmZo4'allowfullscreen />


    </>
  );
}

export default App;

// https://www.npmjs.com/package/react-sticky-header