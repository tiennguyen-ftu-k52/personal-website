import React from 'react';
import {Container} from 'semantic-ui-react';
import {string, func} from 'prop-types';

import {Styles} from '../constants';
import {StyledSegment, StyledHeader, StyledText, StyledButton} from '../ui';

const Intro = StyledSegment.extend`
  &&& {
    height: calc(100vh - 6rem);
    background-image: linear-gradient(
        rgba(20, 30, 48, 0.7),
        rgba(36, 59, 85, 0.7)
      ),
      url('/assets/images/bg-jumbotron.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Greeting = StyledHeader.extend`
  &&& {
    margin-bottom: 1rem;
  }
`;

const Description = StyledText.extend`
  &&& {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const DownloadButton = StyledButton.extend`
  &&& {
    margin-right: 2rem;
  }
`;

const ContactButton = StyledButton.extend`
  &&& {
    font-weight: 700;

    &.button:hover,
    &.button:active,
    &.button:focus {
      background-color: ${Styles.colors.ORANGE} !important;
      color: ${Styles.colors.WHITE} !important;
    }
  }
`;

const Jumbotron = () => (
  <Intro vertical id="intro">
    <Container text>
      <Greeting as="h1" inverted>
        {"hi. i'm"} <span style={{color: Styles.colors.ORANGE}}>Tien</span>, a
        full stack developer
      </Greeting>
      <Description as="h6" inverted>
        I specialize in front-end (HTML, CSS, Javascript, React), back-end
        (Node.JS, Express.JS) and also database (NoSQL, MongoDB). I love to
        build producing high quality responsive websites and always pay
        attention for user experience & client satisfaction.
      </Description>
      <DownloadButton
        primary
        size="huge"
        icon="download"
        content="Download My CV"
        as="a"
        href="/assets/pdf/cv-en.pdf"
        target="_blank"
      />
      <ContactButton
        basic
        color="orange"
        size="huge"
        icon="comments outline"
        content="Hire Me"
        as="a"
        href="mailto:tiennguyen.ftu.k52@gmail.com"
      />
    </Container>
  </Intro>
);

export default Jumbotron;
