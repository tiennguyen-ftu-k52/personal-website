import React from 'react';
import {render} from 'react-dom';
import 'react-vertical-timeline-component/style.min.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-circular-progressbar/docs/styles.css';
import {injectGlobal} from 'styled-components';

import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Others from './components/Others';
import Projects from './components/Projects';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,500,700");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/devicon.min.css");
  
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Raleway', 'Lato', sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.5;
  }
  
  @media only screen and (max-width: 767) {
    font-size: 8px;
  }
`;

const App = () => (
  <div>
    <NavBar />
    <Jumbotron />
    <AboutMe />
    <Experiences />
    <Skills />
    <Others />
    <Projects />
    <References />
    <Contact />
    <Footer />
  </div>
);

render(<App />, document.getElementById('app'));
