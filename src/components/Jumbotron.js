import React from 'react';
import {Segment, Container, Header, Button, Icon} from 'semantic-ui-react';
import {compose, withState, withHandlers} from 'recompose';
import {string, func} from 'prop-types';
import styled from 'styled-components';

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
  }
`;

const StyledHeader = styled(Header)`
  &&& {
    font-size: 4rem;
    font-weight: normal;
    margin-bottom: 0;
    margin-top: 3rem;
  }
`;

const Jumbotron = () => (
  <StyledSegment textAlign="center" vertical>
    <Container text>
      <StyledHeader as="h1" content="Imagine-a-Company" inverted />
      <Header
        as="h2"
        content="Do whatever you want when you want to."
        inverted
        style={{fontSize: '1.7em', fontWeight: 'normal'}}
      />
      <Button primary size="huge">
        Get Started
        <Icon name="right arrow" />
      </Button>
    </Container>
  </StyledSegment>
);

export default Jumbotron;
