import React from 'react';
import {compose, withHandlers} from 'recompose';
import {func} from 'prop-types';
import styled from 'styled-components';
import {
  Button,
  ButtonGroup,
  Icon,
  Grid,
  GridRow,
  GridColumn,
  Container,
} from 'semantic-ui-react';

import {StyledSegment, StyledHeader} from '../ui';
import {Styles} from '../constants';
import NavItemsData from '../data/nav-items.json';

const FooterSegment = StyledSegment.extend`
  &&& {
    padding: 3rem 0;
    background-color: ${Styles.colors.NAVY};
    color: ${Styles.colors.LIGHT_GREY};
  }
`;

const FooterCopyright = StyledHeader.extend`
  &&& {
    color: ${Styles.colors.LIGHT_GREY};
    font-size: ${Styles.sizes.p};
    vertical-align: middle;
    margin: 0;
    padding: 0.5rem 0 0;
  }
`;

const SocialButton = styled(Button)`
  &&& {
    padding: 0 1rem;
    box-shadow: none !important;
    font-size: 1.2rem !important;
    color: ${Styles.colors.ORANGE};

    :hover,
    :active,
    :focus {
      background-color: transparent;
      border: none;
      color: ${Styles.colors.LIGHT_GREY};
      box-shadow: none !important;
    }
  }
`;

export const Footer = ({renderSocialIcons}) => (
  <FooterSegment>
    <Container>
      <Grid columns={2}>
        <GridRow>
          <GridColumn textAlign="left">
            <FooterCopyright as="h6" uppercase="false">
              Copyright &copy; Tien Nguyen 2017. All rights reserved.
            </FooterCopyright>
          </GridColumn>
          <GridColumn textAlign="right">
            {renderSocialIcons(NavItemsData.socials)}
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  </FooterSegment>
);

Footer.propTypes = {
  renderSocialIcons: func.isRequired,
};

export default compose(
  withHandlers({
    renderSocialIcons() {
      return socials => {
        if (socials && socials.length) {
          return (
            <ButtonGroup size="large">
              {socials.map(social => (
                <SocialButton
                  key={social._id}
                  as="a"
                  href={social.link}
                  target="_blank"
                  inverted>
                  <Icon name={social.name} size="large" />
                </SocialButton>
              ))}
            </ButtonGroup>
          );
        }

        return null;
      };
    },
  }),
)(Footer);
