import React from 'react';
import styled from 'styled-components';
import {Grid, GridRow, GridColumn, Container, Image} from 'semantic-ui-react';

import {StyledSegment, StyledHeader} from '../ui';
import {Styles} from '../constants';

const AboutMeSegment = StyledSegment.extend`
  &&& {
    background-color: ${Styles.colors.GREY};
  }
`;

const ProfileContainer = styled(Container)`
  &&& {
    padding-right: 1rem;
  }
`;

const InfoContainer = styled(Container)`
  &&& {
    padding-left: 1rem;
  }
`;

const AboutMe = () => (
  <AboutMeSegment id="about-me">
    <Grid columns={2} style={{border: 'none'}}>
      <GridRow>
        <GridColumn>
          <ProfileContainer>
            <Image
              src="/assets/images/profile.jpg"
              width={250}
              height={250}
              circular
              floated="right"
              verticalAlign="middle"
            />
          </ProfileContainer>
        </GridColumn>
        <GridColumn>
          <InfoContainer>
            <StyledHeader as="h2" content="Personal Info" />
            <p>
              <b>Full Name</b>: Tien Nguyen Minh
            </p>
            <p>
              <b>Birthday</b>: Feb 21, 1995
            </p>
            <p>
              <b>Phone</b>: +84983603428
            </p>
            <p>
              <b>Email</b>: tiennguyen.ftu.k52@gmail.com
            </p>
            <p>
              <b>Github</b>: tiennguyen-ftu-k52
            </p>
            <p>
              <b>Address</b>: Ho Chi Minh City, Vietnam
            </p>
          </InfoContainer>
        </GridColumn>
      </GridRow>
    </Grid>
  </AboutMeSegment>
);

export default AboutMe;
