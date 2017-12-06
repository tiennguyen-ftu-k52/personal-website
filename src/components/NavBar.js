import React from 'react';
import {Menu} from 'semantic-ui-react';
import {compose, withState, withHandlers} from 'recompose';
import {string, func} from 'prop-types';
import styled from 'styled-components';

import NavItemsData from '../data/nav-items.json';
import {Styles} from '../constants';
import logoImg from '../assets/images/meteor-logo-white.png';

const StyledMenu = styled(Menu)`
  &&& {
    border-radius: 0;
    background-color: ${Styles.colors.NAVY};
    margin: 0;
  }
`;

const StyledItem = styled(Menu.Item)`
  font-family: ${Styles.fonts.RALEWAY}, ${Styles.fonts.LATO}, sans-serif;
  background-color: ${Styles.colors.NAVY};
  color: ${Styles.colors.GRAY} !important;
  font-size: 1.6rem;

  &&&.active.item,
  &&&.active.item:hover,
  &&&:hover,
  &&&:active,
  &&&:focus {
    background-color: ${Styles.colors.NAVY} !important;
    color: ${Styles.colors.RED} !important;
    font-weight: 600 !important;
  }
`;

const StyledImg = styled.img`
  .ui.menu .item &&& {
    width: 9rem;
    height: auto;
    margin-top: -1.5rem;
  }
`;

const NavBar = ({activeItem, onItemClick, renderMenuItems}) => (
  <StyledMenu inverted borderless>
    <StyledItem
      name="home"
      href="#intro"
      active={activeItem === 'home'}
      onClick={onItemClick}>
      <StyledImg src={logoImg} alt="Meteor" />
    </StyledItem>
    <Menu.Menu position="right">
      {renderMenuItems(activeItem, onItemClick)}
    </Menu.Menu>
  </StyledMenu>
);

NavBar.propTypes = {
  activeItem: string.isRequired,
  onItemClick: func.isRequired,
  renderMenuItems: func.isRequired,
};

export default compose(
  withState('activeItem', 'setActiveItem', 'home'),
  withHandlers({
    onItemClick: ({setActiveItem}) => {
      return (e, {name}) => setActiveItem(name);
    },
    renderMenuItems: ({activeItem, onItemClick}) => {
      return () =>
        NavItemsData.sections.map(item => (
          <StyledItem
            name={item.name}
            active={activeItem === item.name}
            onClick={onItemClick}
            href={item.link}
            key={item._id}
          />
        ));
    },
  }),
)(NavBar);
