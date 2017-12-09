import React from 'react';
import styled from 'styled-components';
import {compose, withHandlers} from 'recompose';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import {
  Container,
  Icon,
  List,
  ListItem,
  ListIcon,
  ListContent,
  Label,
} from 'semantic-ui-react';
import {func} from 'prop-types';

import ExperiencesData from '../data/experiences.json';
import {StyledSegment, StyledHeader} from '../ui';
import {Styles} from '../constants';

const ExperienceSegment = StyledSegment.extend`
  .vertical-timeline-element-content .vertical-timeline-element-date,
  .vertical-timeline-element-content p {
    font-size: ${Styles.sizes.h5};
    color: #000;
    left: 136%;
    top: 0;
  }

  .vertical-timeline-element--right
    .vertical-timeline-element-content
    .vertical-timeline-element-date,
  .vertical-timeline-element-content p {
    right: 136% !important;
  }

  i.large.icon,
  i.large.icons {
    font-size: 2.5em;
    position: relative;
    top: 10px;
    left: 10px;
  }
`;

const ExperiencesTimeline = styled(VerticalTimeline)`
  &&&::before {
    background: ${Styles.colors.BLUE};
  }
`;

const TechLabel = styled(Label)`
  &&&:hover {
    background-color: ${props =>
      Styles.colors[props.color.toUpperCase()]} !important;
    color: ${Styles.colors.WHITE} !important;
    cursor: default;
  }
`;

const Experiences = ({renderWorkExperiences}) => (
  <ExperienceSegment id="work-experience">
    <Container>
      <StyledHeader as="h2" content="work experiences & education" />
      <ExperiencesTimeline>{renderWorkExperiences()}</ExperiencesTimeline>
    </Container>
  </ExperienceSegment>
);

Experiences.propTypes = {
  renderWorkExperiences: func.isRequired,
};

export default compose(
  withHandlers({
    renderTechnologies() {
      return technologies => {
        if (technologies && technologies.length) {
          return (
            <div style={{marginBottom: 10}}>
              <StyledHeader as="p" uppercase="false">
                <b>Technologies Involved: </b>
              </StyledHeader>
              {technologies.map((tech, index) => (
                <TechLabel basic key={index} color="orange">
                  {tech}
                </TechLabel>
              ))}
            </div>
          );
        }

        return null;
      };
    },
  }),
  withHandlers({
    renderTools() {
      return tools => {
        if (tools && tools.length) {
          return (
            <div>
              <StyledHeader as="p" uppercase="false">
                <b>Tools:</b>
              </StyledHeader>
              {tools.map((tool, index) => (
                <TechLabel basic key={index} color="blue">
                  {tool}
                </TechLabel>
              ))}
            </div>
          );
        }

        return null;
      };
    },
  }),
  withHandlers({
    renderWorkExperiences({renderTechnologies, renderTools}) {
      return () =>
        ExperiencesData.map(ex => (
          <VerticalTimelineElement
            key={ex._id}
            date={ex.timeline}
            position={ex._id % 2 === 0 ? 'left' : 'right'}
            icon={
              <Icon
                name={ex.type === 'experience' ? 'suitcase' : 'student'}
                size="large"
              />
            }
            iconStyle={{
              background: Styles.colors.BLUE,
              color: Styles.colors.WHITE,
            }}>
            <StyledHeader as="h4">{ex.position}</StyledHeader>
            <StyledHeader as="h6">
              {ex.company.name}{' '}
              {ex.company.type ? `- ${ex.company.type}` : null}
            </StyledHeader>
            <List>
              {ex.descriptions.map((des, index) => (
                <ListItem key={index}>
                  <ListIcon name="code" />
                  <ListContent>{des}</ListContent>
                </ListItem>
              ))}
            </List>
            {renderTechnologies(ex.technologies)}
            {renderTools(ex.tools)}
          </VerticalTimelineElement>
        ));
    },
  }),
)(Experiences);
