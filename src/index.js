import React from 'react';
import {render} from 'react-dom';
import 'react-vertical-timeline-component/style.min.css';
import 'semantic-ui-css/semantic.min.css';
import {injectGlobal} from 'styled-components';

import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Others from './components/Others';

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,500,700");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/devicon.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/fonts/devicon.eot");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/fonts/devicon.svg");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/fonts/devicon.ttf");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/fonts/devicon.woff");
  
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Raleway', 'Lato', sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.5;
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
  </div>
);

render(<App />, document.getElementById('app'));
