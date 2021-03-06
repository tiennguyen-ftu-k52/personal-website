import React from 'react';
import {compose, withHandlers} from 'recompose';
import styled from 'styled-components';
import {func} from 'prop-types';
import {
  Grid,
  GridRow,
  GridColumn,
  Container,
  Progress,
} from 'semantic-ui-react';

import {StyledSegment, StyledHeader} from '../ui';
import SkillsData from '../data/skills.json';
import {Styles} from '../constants';

const SkillsSegment = StyledSegment.extend`
  &&& {
    background-color: ${Styles.colors.GREY};
  }
`;

const SkillsHeader = StyledHeader.extend`
  &&& {
    margin-bottom: 2.5rem;
  }
`;

const SkillsProgress = styled(Progress)`
  &&& {
    width: 70%;
  }
`;

const Skills = ({renderSkills}) => (
  <SkillsSegment>
    <Container>
      <SkillsHeader as="h2" content="skills" />
      <Grid>
        <GridRow>
          <GridColumn mobile={16} tablet={8} computer={8}>
            <SkillsHeader as="h3" content="front end" />
            {renderSkills(SkillsData['front end'])}
          </GridColumn>
          <GridColumn mobile={16} tablet={8} computer={8}>
            <SkillsHeader as="h3" content="back end" />
            {renderSkills(SkillsData['back end'])}
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn mobile={16} tablet={8} computer={8}>
            <SkillsHeader as="h3" content="mobile development" />
            {renderSkills(SkillsData['mobile development'])}
          </GridColumn>
          <GridColumn mobile={16} tablet={8} computer={8}>
            <SkillsHeader as="h3" content="desktop development" />
            {renderSkills(SkillsData['desktop development'])}
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn mobile={16} tablet={8} computer={8}>
            <StyledHeader as="h3" content="others" />
            {renderSkills(SkillsData['others'])}
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  </SkillsSegment>
);

Skills.propTypes = {
  renderSkills: func.isRequired,
};

export default compose(
  withHandlers({
    renderSkills() {
      return skills => {
        if (skills && skills.length) {
          return skills.map(skill => (
            <div key={skill.name}>
              <StyledHeader as="h6" uppercase="false">
                <i className={`${skill.icon} colored`} /> {skill.name}
              </StyledHeader>
              <SkillsProgress
                size="small"
                indicating
                value={skill.value}
                total={100}
              />
            </div>
          ));
        }

        return null;
      };
    },
  }),
)(Skills);
