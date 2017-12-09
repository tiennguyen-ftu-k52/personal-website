import React from 'react';
import styled from 'styled-components';
import {Icon} from 'semantic-ui-react';

import {StyledSegment, StyledHeader, StyledButton} from '../ui';
import {Styles} from '../constants';

const ContactSegment = StyledSegment.extend`
  &&& {
    background-color: ${Styles.colors.LIGHT_NAVY};
    text-align: center;

    .header {
      color: ${Styles.colors.WHITE};
    }
  }
`;

const QuestionHeader = StyledHeader.extend`
  &&& {
    :after {
      display: block;
      height: 0.2rem;
      background-color: ${Styles.colors.BLUE};
      content: ' ';
      width: 10rem;
      margin: 3rem auto 0;
    }
  }
`;

const ContactIcon = styled(Icon)`
  &&& {
    font-size: 10rem;
    color: ${Styles.colors.WHITE};
    margin-bottom: 3rem;
  }
`;

const ContactEmail = StyledHeader.extend`
  &&& {
    :after {
      display: block;
      height: 0.2rem;
      background-color: ${Styles.colors.BLUE};
      content: ' ';
      width: 15rem;
      margin: 3rem auto;
    }
  }
`;

const Contact = () => (
  <ContactSegment id="contact">
    <StyledHeader as="h2" content="contact me" />
    <QuestionHeader
      as="h6"
      content="Have a project you'd like to discuss?"
      uppercase="false"
    />
    <ContactIcon name="comments" />
    <StyledHeader as="h3" content="tien nguyen" />
    <ContactEmail
      as="h6"
      content="tiennguyen.ftu.k52@gmail.com"
      uppercase="false"
    />
    <StyledButton
      inverted
      size="huge"
      color="blue"
      content="Send Me A Message"
      as="a"
      href="mailto:tiennguyen.ftu.k52@gmail.com"
    />
  </ContactSegment>
);

export default Contact;
