import React from 'react';
import styled from 'styled-components';
import {
  Grid,
  GridColumn,
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  Container,
  Image,
} from 'semantic-ui-react';

import ProjectsData from '../data/projects.json';
import {StyledSegment, StyledHeader} from '../ui';
import {Styles} from '../constants';

const ProjectsHeader = StyledHeader.extend`
  &&& {
    margin-bottom: 2.5rem;
  }
`;

const ProjectCard = styled(Card)`
  &&& {
    :hover {
      transform: scale(1.05);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      transition: 0.3s;
    }
  }
`;

const ProjectCardHeader = styled(CardHeader)`
  &&& {
    font-family: ${Styles.fonts.RALEWAY}, ${Styles.fonts.LATO}, sans-serif !important;
  }
`;

const Projects = () => (
  <StyledSegment id="projects">
    <Container>
      <ProjectsHeader as="h2" content="my latest works" />
      <Grid columns={4}>
        {ProjectsData.map(project => (
          <GridColumn key={project._id}>
            <ProjectCard as="a" href={project.link} target="_blank">
              <Image src={project.image} />
              <CardContent>
                <ProjectCardHeader>{project.name}</ProjectCardHeader>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </ProjectCard>
          </GridColumn>
        ))}
      </Grid>
    </Container>
  </StyledSegment>
);

export default Projects;
