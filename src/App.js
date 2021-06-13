import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './scss/main.scss';

import Home from "./components/Home";
import WhatsTheMatter from "./components/WhatsTheMatter";
import AboutUs from "./components/AboutUs";
import Foundations from "./components/Foundations";
import Contact from "./components/Contact";



import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const App = () => {
  return (

    <BrowserRouter>


      <div className="app">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/o-co-chodzi" component={WhatsTheMatter} />
          <Route exact path="/o-nas" component={AboutUs} />
          <Route exact path="/fundacja-i-organizacja" component={Foundations} />
          <Route exact path="/kontakt" component={Contact} />

        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
