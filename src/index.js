import React from 'react';
import {render} from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {injectGlobal} from 'styled-components';

import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import AboutMe from './components/AboutMe';

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,500,700");
  
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;

const App = () => (
  <div>
    <NavBar />
    <Jumbotron />
    <AboutMe />
  </div>
);

render(<App />, document.getElementById('app'));
