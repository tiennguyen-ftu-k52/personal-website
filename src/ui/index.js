import styled from 'styled-components';
import {Segment, Header, Button} from 'semantic-ui-react';

import {Styles} from '../constants';

const {fonts, sizes} = Styles;

const StyledSegment = styled(Segment)`
  &&& {
    margin: 0;
    padding: 7rem 0;
    border-radius: 0;
    border: none;
    font-size: 1.6rem;
  }
`;

const StyledHeader = styled(Header)`
  &&& {
    font-family: ${fonts.RALEWAY}, ${fonts.LATO}, sans-serif;
    font-weight: 300;
    font-size: ${props => props.size || sizes[props.as]};
    text-transform: uppercase;
  }
`;

const StyledText = styled.p`
  font-family: ${fonts.RALEWAY}, ${fonts.LATO}, sans-serif;
  font-weight: 300;
  font-size: ${props => props.size || sizes[props.as]};
`;

const StyledButton = styled(Button)`
  &&& {
    font-family: ${Styles.fonts.RALEWAY}, ${Styles.fonts.LATO}, sans-serif;
  }
`;

export {StyledSegment, StyledHeader, StyledText, StyledButton};
