import React from 'react';
import {
  Container,
  Grid,
  GridRow,
  GridColumn,
  Button,
  Icon,
} from 'semantic-ui-react';
import CircularProgressbar from 'react-circular-progressbar';
import styled from 'styled-components';

import {StyledSegment, StyledHeader} from '../ui';
import {Styles} from '../constants';

const OthersSegment = StyledSegment.extend`
  &&& {
    background-color: ${Styles.colors.GREY};

    .CircularProgressbar-text {
      font-size: ${Styles.sizes.p};
      fill: ${Styles.colors.BLUE};
    }

    .CircularProgressbar-path {
      stroke: ${Styles.colors.BLUE};
    }
  }
`;

const OthersHeader = StyledHeader.extend`
  &&& {
    margin-bottom: 2.5rem;
  }
`;

const LanguageCircularProgressbar = styled(CircularProgressbar)`
  width: 20%;
  margin-right: 2.5rem;
`;

const HobbyButton = styled(Button)`
  &&& {
    margin-right: 1.5rem;
    width: 7rem;
    height: 7rem;
    border: 0.2rem solid ${Styles.colors.BLUE};
    color: ${Styles.colors.NAVY};
    transition: 0.5s;

    :hover {
      transform: scale(1.2);
      color: ${Styles.colors.NAVY};
    }

    > i.icon {
      vertical-align: middle;
      height: auto;
    }
  }
`;

const Others = () => (
  <OthersSegment>
    <Container>
      <Grid columns={2}>
        <GridRow>
          <GridColumn>
            <OthersHeader as="h2" content="languages" />
            <LanguageCircularProgressbar
              percentage={100}
              strokeWidth={6}
              textForPercentage={() => 'Vietnamese'}
            />
            <LanguageCircularProgressbar
              percentage={70}
              strokeWidth={6}
              textForPercentage={() => 'English'}
            />
          </GridColumn>
          <GridColumn>
            <OthersHeader as="h2" content="Hobbies & Interest" />
            <HobbyButton inverted>
              <Icon name="music" size="huge" />
            </HobbyButton>
            <HobbyButton inverted>
              <Icon name="game" size="huge" />
            </HobbyButton>
            <HobbyButton inverted>
              <Icon name="plane" size="huge" />
            </HobbyButton>
            <HobbyButton inverted>
              <Icon name="bug" size="huge" />
            </HobbyButton>
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  </OthersSegment>
);

export default Others;
