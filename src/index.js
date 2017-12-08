import React from 'react';
import {render} from 'react-dom';
import 'react-vertical-timeline-component/style.min.css';
import 'semantic-ui-css/semantic.min.css';
import {injectGlobal} from 'styled-components';

import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,500,700");
  
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
  </div>
);

render(<App />, document.getElementById('app'));
