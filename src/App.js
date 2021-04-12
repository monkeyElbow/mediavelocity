import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./App.css";

import MenuBar from "./components/MenuBar";

import Home from './pages/Home'
import SonnyBIO from './pages/sonnyBIO'
import PageNotFound from './pages/PageNotFound'
import James from './pages/JamesBIO'

function App() {
  return (
    <>
<Router>
<MenuBar />

<Switch>

<Route exact path="/sonny" component={SonnyBIO} />
<Route path="/james" component={James} />
<Route exact path="/" component={Home} />
<Route component={PageNotFound} />

</Switch>
</Router>
    </>
  );
}

export default App;

// https://www.npmjs.com/package/react-sticky-header
