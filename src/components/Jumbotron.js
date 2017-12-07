import React from 'react';
import {Segment, Container, Header, Button, Icon} from 'semantic-ui-react';
import {compose, withState, withHandlers} from 'recompose';
import {string, func} from 'prop-types';
import styled from 'styled-components';

import {Styles} from '../constants';

const StyledSegment = styled(Segment)`
  &&& {
    height: calc(100vh - 6rem);
    padding: 1rem 0;
    margin: 0;
    background-image: linear-gradient(
        rgba(20, 30, 48, 0.7),
        rgba(36, 59, 85, 0.7)
      ),
      url('/assets/images/bg-jumbotron.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #fff;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Greeting = styled(Header)`
  &&& {
    font-family: ${Styles.fonts.RALEWAY}, ${Styles.fonts.LATO}, sans-serif;
    font-size: 4rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`;

const Description = styled(Header)`
  &&& {
    font-family: ${Styles.fonts.RALEWAY}, ${Styles.fonts.LATO}, sans-serif;
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

const ActionButton = styled(Button)`
  &&& {
    font-family: ${Styles.fonts.RALEWAY}, ${Styles.fonts.LATO}, sans-serif;
  }
`;

const DownloadButton = ActionButton.extend`
  &&& {
    margin-right: 2rem;
  }
`;

const ContactButton = ActionButton.extend`
  &&& {
    font-weight: 700;

    &.button:hover,
    &.button:active,
    &.button:focus {
      background-color: ${Styles.colors.BLUE} !important;
      color: ${Styles.colors.WHITE} !important;
    }
  }
`;

const Jumbotron = () => (
  <StyledSegment textAlign="center" vertical id="intro">
    <Container text>
      <Greeting as="h1" inverted>
        {"hi. i'm tien, a full stack developer"}
      </Greeting>
      <Description as="h2" inverted>
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
        color="blue"
        size="huge"
        icon="comments outline"
        content="Hire Me"
        as="a"
        href="#contact"
      />
    </Container>
  </StyledSegment>
);

export default Jumbotron;
