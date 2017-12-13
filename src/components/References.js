import React from 'react';
import {compose, withHandlers} from 'recompose';
import styled from 'styled-components';
import {func} from 'prop-types';
import {Grid, GridRow, GridColumn, Container, Image} from 'semantic-ui-react';

import {StyledSegment, StyledHeader} from '../ui';
import {Styles} from '../constants';
import ReferencesData from '../data/references.json';

const ReferencesSegment = StyledSegment.extend`
  &&& {
    background-image: linear-gradient(
        rgba(20, 30, 48, 0.7),
        rgba(36, 59, 85, 0.7)
      ),
      url('/assets/images/work-space.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: ${Styles.colors.WHITE};
    text-align: center;
  }
`;

const ReferencesHeader = StyledHeader.extend`
  &&& {
    color: ${Styles.colors.WHITE};
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

const ReferencesBlockquote = styled.blockquote`
  padding: 2%;
  font-style: italic;
  position: relative;
  text-align: justify;

  :before {
    content: '\\201C';
    font-size: 500%;
    display: block;
    position: absolute;
    top: -3rem;
    left: -2.5rem;
  }
`;

const ReferencesCite = styled.cite`
  font-size: 90%;
  margin-top: 2.5rem;
  display: block;
`;

const ReferencesImg = styled.img`
  border-radius: 50%;
  margin-right: 1rem;
  vertical-align: middle;
`;

const ReferencesClient = styled.span`
  font-size: ${Styles.sizes.h6};
  font-style: normal;
`;

const References = ({renderQuotes}) => (
  <ReferencesSegment id="references">
    <Container>
      <ReferencesHeader as="h2" content="what clients say about me" />
      {renderQuotes(ReferencesData)}
    </Container>
  </ReferencesSegment>
);

References.propTypes = {
  renderQuotes: func.isRequired,
};

export default compose(
  withHandlers({
    renderQuotes() {
      return quotes => {
        if (quotes && quotes.length) {
          return (
            <Grid>
              <GridRow>
                {quotes.map(quote => (
                  <GridColumn key={quote._id} mobile={16} tablet={8} computer={5}>
                    <ReferencesBlockquote>
                      {quote.quote}
                      <ReferencesCite>
                        <ReferencesImg
                          src={quote.clientImg}
                          alt={quote.clientName}
                          width={45}
                          height={45}
                        />
                        <ReferencesClient>{quote.clientName}</ReferencesClient>
                      </ReferencesCite>
                    </ReferencesBlockquote>
                  </GridColumn>
                ))}
              </GridRow>
            </Grid>
          );
        }

        return null;
      };
    },
  }),
)(References);
